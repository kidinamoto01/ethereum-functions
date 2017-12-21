#!/bin/bash
npm install -g underscore-cli
result=$(geth  --exec  'admin.nodeInfo'  attach /Users/b/Documents/chaindata/geth.ipc)
id=$(echo  $result | underscore select '.id')
echo $id
#testing the read -destination ip option
read -p "please enter your age:" ip  ---ip
echo $ip
echo $id
curl -X POST $ip   -d  '{"id":"'"$id"'"}'
