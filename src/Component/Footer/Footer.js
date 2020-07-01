function waitForLoad(id, callback){
    var timer = setInterval(function(){
        if(document.getElementById(id)){
            clearInterval(timer);
            callback();
        }
    }, 100);
}

waitForLoad("submit-btn", function(){
    console.log("load successful, you can proceed!!");
    document.getElementById("submit-btn").onclick = function()
    {
        alert("I got clicked");
    }
});