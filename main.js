rec = new window.webkitSpeechRecognition()
function start() {
    rec.start();
}
rec.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    if(content == "selfie"){
        textToSpeech();
        Webcam.attach("#camera");
        setTimeout(function(){
            image_id="selfie1"
        },5000)
    }
   


    function textToSpeech(){
     speechtext = "taking the selfie in 10 seconds"
     speechaudio = new speechSynthesis(speechtext);
     window.speechSynthesis.speak(speechaudio)
    }
    Webcam.set({
        width: 360,
        height: 250
        image_format: "png",
        png_quality:90;
    })
   
}

