let textArea = document.querySelector("textarea");
let transButton = document.querySelector("#tButton");
let outputText = document.querySelector("#output");

//we want to talk with this server 
let serverURL = 'https://api.funtranslations.com/translate/minion.json'

function gettranslate(text){
    return serverURL + "?" + "text=" +text
}


function errorhandler(error){
    console.log("error occured", error)
    alert("error he");
}
function sendoutput(){
    // outputText.innerHTML = textArea.value;
    var inputtext = textArea.value ;
    fetch(gettranslate(inputtext))
    .then(response => response.json())
    .then(json => {
        var translated = json.contents.translated
        outputText.innerHTML = translated;
    })
    .catch(errorhandler)
}
transButton.addEventListener("click", sendoutput)




