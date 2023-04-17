const formSubmit = document.getElementById("formSubmit");
if(formSubmit){
    formSubmit.onclick = function(){
        var form = document.getElementById("form");
        var data = new FormData(form);
        var startLetter = data.get("start");
        var numSearchD = data.get("numberD");
        var numSearchM = data.get("numberM");
        var selected = data.get("sel");
        if(startLetter.length!=1){
            document.getElementById("gen").innerHTML="Enter a single letter";
        }
        else if(numSearchD===""&&numSearchM===""){
            document.getElementById("gen").innerHTML="Enter any Number";
        }
        else{
            search(startLetter,numSearchD,numSearchM,selected);
    }
}

}
function search(startLetter, numSearchD,numSearchM,selected){
    var result = generateString(startLetter,numSearchD,numSearchM,selected);
    repeatedSearch(result,numSearchD,numSearchM,selected);
}
function generateString(startLetter,lengthD,lengthM,selected) {
    var result = startLetter;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    /*if(selected==="dm"){
        var len = lengthD+lengthM;
        for (var i = 0; i < len-1; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    }*/ //not yet implemented
    if(selected==="do"){
        for (var i = 0; i < lengthD-1; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
    }
    else if(selected==="mo"){
        for (var i = 0; i < lengthM-1; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          return result;
    }
    
}
function repeatedSearch(result,numSearchD,numSearchM,selected){
    const searches=[];
    var query = result;
    //implement Desktop and Mobile DM

    if(selected==="do"){
        for(var i=0;i<numSearchD;i++){
            searches[i]=query;
            query=query.slice(0,-1);
                    // var win = window.open('https://www.bing.com/search?q='+query);
                    // win.focus();
                    // query=query.slice(0,-1);        
        }
        executeSearchD(searches);
    }
    else if(selected==="mo"){
        for(var i=0;i<numSearchM;i++){
            searches[i]=query;
            query=query.slice(0,-1);
                    // var win = window.open('https://www.bing.com/search?q='+query);
                    // win.focus();
                    // query=query.slice(0,-1);        
        }
        executeSearchM(searches);
    }
    
}
function executeSearchD(searches){
    for(var i=0; i<searches.length; i++){
        var win = window.open('https://www.bing.com/search?q='+searches[i]);
        win.focus();
    }
}
function executeSearchM(searches){
    alert("search mob");
    Object.defineProperty(navigator, 'userAgent', {
        value: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
        writable: false,
        configurable: false,
        enumerable: true
      });      
    for(var i=0; i<searches.length; i++){
        var win = window.open('https://www.bing.com/search?q='+searches[i]);
        win.focus();
    }
    // delete navigator.userAgent;
}
  