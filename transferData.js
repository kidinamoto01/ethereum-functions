function transferData(from ,to,input) { 
    var gas = 21000;
    var balance = eth.getBalance(from);
    var price = web3.toWei(50, "shannon");
    var value = balance - gas * price;
   var info = web3.toHex(input);     
   var price = web3.toWei(10,'finney');    
   if (value > 0) { 
	personal.unlockAccount(web3.eth.accounts[0], "password"); 
    var txn = eth.sendTransaction({from: from, to: to, value:price,data:info});
         console.log("  Transfer "+ from +" to "+ to +": "+ txn);    
     return txn;  
   }    
   console.log("  Transfer "+ from +" to "+ to +": (No funds available)");    
 return null; }
