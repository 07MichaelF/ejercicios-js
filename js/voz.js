var speechRecognition = window.webkitSpeechRecognition;

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "es";
var textbox = $("#textbox");
var finalResult = "";

$("#grabar").click(function (event) {
    limpiar();
    event.preventDefault();
    if (finalResult.length) {
        finalResult += "";
    }

    recognition.start();

    recognition.onresult = function (event) {
        var current = event.resultIndex;
        var transcript = event.results[current][0].transcript;
        finalResult += transcript;
        textbox.val(finalResult);
        document.getElementById("result-otro-1").textContent = finalResult;
    };

    document.getElementById("grabar").disabled = true;
    document.getElementById("parar").style.visibility = "visible";

    document.getElementById("grabar").style.display = "none";
    document.getElementById("parar").style.display = "block";
});

$("#parar").click(function (event) {
    event.preventDefault();
    document.getElementById("grabar").disabled = false;
    document.getElementById("parar").style.display = "none";
    document.getElementById("grabar").style.display = "block";
    recognition.stop();
});

const limpiar = () =>{
    document.getElementById("result-otro-1").textContent = "";
    finalResult = ""
}