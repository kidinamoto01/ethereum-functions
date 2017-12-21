function getInputInfo(txn){
    var tx = eth.getTransaction(txn);
    if(txn != null){
	 var tmp = tx.input;
         var message = web3.toAscii(tmp);
	console.log("Get message "+message);
         return   message; 
    }
  console.log("Error get message ");
  return null;
}
