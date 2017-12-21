function sendMessage(receiver,message){
  if(message != null){

    web3.personal.unlockAccount(web3.eth.accounts[0],"password");

    web3.eth.sendTransaction({from:eth.accounts[0],to:receiver,value:web3.toWei(100,'finney'),data:web3.toHex(message)});

    console.log("send message "+message+" to "+receiver);
  }
}
