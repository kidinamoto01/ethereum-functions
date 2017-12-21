function getMessage(receiver){

   result = "";
   endBlockNumber = eth.blockNumber;
   startBlockNumber = endBlockNumber-10;
   //get latest block
   for (var i = startBlockNumber; i <= endBlockNumber; i++) {
   var block = eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
        block.transactions.forEach( function(e) {
        if (receiver == e.to) {

          var message = web3.toAscii(e.input );
          result += message+",";
          console.log("  receive input : " +  message);
        }
      })
    }
  }
  return result;
}
