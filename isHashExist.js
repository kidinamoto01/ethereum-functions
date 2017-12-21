function isHashExist(message) {
  
    endBlockNumber = eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  
    startBlockNumber = 1;
    console.log("Using startBlockNumber: " + startBlockNumber);
  console.log("Searching for transactions within blocks "  + startBlockNumber + " and " + endBlockNumber);

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 == 0) {
      console.log("Searching block " + i);
    }
    var block = eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach( function(e) {
          if(e.input == message){
          console.log("   input           : " + e.input);
          }
          
      })
    }
  }
}
