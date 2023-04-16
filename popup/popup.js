const formSubmit = document.getElementById("formSubmit");
if(formSubmit){
    formSubmit.onclick = function(){
        var form = document.getElementById("form");
        var data = new FormData(form);
        var startLetter = data.get("start");
        var numSearch = data.get("number");
        if(startLetter.length!=1){
            document.getElementById("gen").innerHTML="Enter a single letter";
        }
        else if(numSearch>40||numSearch==""||numSearch<=0){
            alert("no num");
            document.getElementById("gen").innerHTML="Number must be 0-40";
        }
        else{
            search(startLetter,numSearch);
    }
}

}
function search(startLetter, numSearch){
    var result = generateString(startLetter,numSearch);
    repeatedSearch(result,numSearch);
}
function generateString(startLetter,length) {
    var result = startLetter;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length-1; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function repeatedSearch(result,numSearch){
    for(var i=0;i<numSearch;i++){
                var win = window.open('https://www.bing.com/search?q='+result, '_blank');
                win.focus();
                result=result.slice(0,-1);
    }
}
  