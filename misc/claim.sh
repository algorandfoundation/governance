#!/bin/bash

echo "Usage: $0 prd idx"
echo "  prd is the governance period, 1,2,3,..."
echo "  idx is the governor's index in the CSV file"
set -e

# extract one row from CSV file, the columns in this file are
# period,gov_idx,gov_addr,amt,error,state_keeping,bit_idx,sig1,sig2,sig3,...
row="$(grep "^$1,$2" ./rewards-list-signed.csv)"

# verify that $row contains exactly one row of the CSV file
if [ $row = "" ]; then
  echo "row with preiod=$1 index=$2 not found in CSV file"
  exit 1
fi

# get the data from the index-i row
rec="$(echo $row | cut -d',' -f 3)"   # receiver (governor)
amt="$(echo $row | cut -d',' -f 4)"   # amount
sa="$(echo $row | cut -d',' -f 6)"    # state-keeping address
idx="$(echo $row | cut -d',' -f 7)"   # index in the bit array
sig1="$(echo $row | cut -d',' -f 8)"  # signature #1, encoded in base64
sig2="$(echo $row | cut -d',' -f 9)"  # signature #2, encoded in base64
sig3="$(echo $row | cut -d',' -f 10)" # signature #3, encoded in base64

# replace empty sigs with by base64 endcoings of the empty string
if [ "$sig1" = "" ]; then sig1="Cg=="; fi
if [ "$sig2" = "" ]; then sig2="Cg=="; fi
if [ "$sig3" = "" ]; then sig3="Cg=="; fi

# encode the index as a 16-bit integers in base64
idx=$(printf '%04x' $idx | xxd -r -p | base64)

# Generate the two transactions in a rewards-claiming group
# This code assume that the pyteal code in ../contracts was compiled
# to generate the corresponding TEAL code, and that the TEAL files are
# in the same directory as the PyTeal files. It also assumes that the
# application-ID of the goverance platform is 350477347

tealDir="../contracts"
appid=350477347
fee=2000
let amt=$amt-$fee # reduce the rewards amount to pay for transaction fees

# method selector for the reards-claiming method
sel="$(echo "5698b72d" | xxd -r -p | base64)" # method selector in base64

# A convenience logicsig that approves almost every application call
appsender="$(goal clerk compile -n $tealDir/call_app.teal|cut -d' ' -f 2)"

# The payment transaction
goal clerk send -a $amt --fee $fee -F $tealDir/logicsig.teal -t $rec --argb64 "$sig1" --argb64 "$sig2" --argb64 "$sig3" -o ./rewards-logicsig-$2.tx

# The application call (assuming no conjestion we can do fee=0)
goal app call -f $appsender --app-id $appid --app-account $sa --fee 0 --app-arg "b64:$sel" --app-arg "b64:$idx" -o ./rewards-app-unsigned-$2.tx

goal clerk sign -p $tealDir/call_app.teal -i ./rewards-app-unsigned-$2.tx -o ./rewards-app-$2.tx
\rm -f ./rewards-app-unsigned-$2.tx

# Generate a group with these two transaction. As both transactions are
# authorized by logsigs, there is no need to split/sign/reassmble them
cat ./rewards-logicsig-$2.tx ./rewards-app-$2.tx > ./temp-$2.txs
goal clerk group -i ./temp-$2.txs -o ./rewards-grp-$2.tx
\rm -f ./temp-$2.txs ./rewards-logicsig-$2.tx ./rewards-app-$2.tx

# Send to the network

\rm -f ./rewards-grp-$2.tx.rej # just in case
goal clerk rawsend -f ./rewards-grp-$2.tx

set +e
