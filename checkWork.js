function checkWork() {
    if (eth.getBlock("pending").transactions.length > 0) {
        if (eth.mining) return;
        console.log("== Pending transactions! Mining...");
        miner.start(2);
    } else {
        miner.stop();  // This param means nothing
        console.log("== No transactions! Mining stopped.");
    }
}
eth.filter("latest", function(err, block) { checkWork(); });
eth.filter("pending", function(err, block) { checkWork(); });
