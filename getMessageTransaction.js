function getMessageTransaction(startBlockNumber, endBlockNumber){

  var result = "";
  if (endBlockNumber == null) {
    endBlockNumber = eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber == null) {
    startBlockNumber = 0;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log("Searching for transactions within blocks "  + startBlockNumber + " and " + endBlockNumber);

 for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 == 0) {
      console.log("Searching block " + i);
    }
    var block = eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach( function(e) {

            var tx = eth.getTransactionReceipt(e.hash);
            if (tx != null) {
              if(tx.contractAddress != null){
               result+= tx.contractAddress+",";
               console.log("contract address:" + tx.contractAddress);
                }
            }

        
      })
    }
  }
  
  return result;
}
