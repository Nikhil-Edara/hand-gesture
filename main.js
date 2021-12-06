Webcam.attach("#camera");
camera=document.getElementById("camera");
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});



function captureimage(){
    Webcam.snap(function(x){
document.getElementById("result").innerHTML='<img id="y" src="'+x+'"/>';
    });
} 
console.log("ml5version",ml5.version);
imgclass=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ci2jJsEHl/model.json',modelloaded);

function modelloaded(){
console.log("ml5 and teachable machine have been loaded");
}

prediction1="";
prediction2="";

function predict(){
    w=document.getElementById("y");
    imgclass.classify(w,gotresult);
}
function speak(){
    var synth = window.speechSynthesis;
    a1="first prediction is "+prediction1;
    a2="second prediction is"+prediction2;
    a3=new SpeechSynthesisUtterance(a1+a2);
    synth.speak(a3);
};









function gotresult(error,result){
    if(error){console.log(error);}
    else{
        console.log(result);

        document.getElementById("emotionname").innerHTML=result[0].label;
        document.getElementById("emotionname1").innerHTML=result[1].label;
        prediction1=result[0].label;
        prediction2=result[1].label;
        speak();
        if(result[0].label=="Thumbs up"){document.getElementById("emoji").innerHTML="&#128077";}
        if(result[0].label=="Thumbs down"){document.getElementById("emoji").innerHTML="&#128078";}
        if(result[0].label=="Victory"){document.getElementById("emoji").innerHTML="&#9996";}
        if(result[1].label=="Thumbs up"){document.getElementById("emoji1").innerHTML="&#128077";}
        if(result[1].label=="Thumbs down"){document.getElementById("emoji1").innerHTML="&#128078";}
        if(result[1].label=="Victory"){document.getElementById("emoji1").innerHTML="&#9996";}
        
    }
}