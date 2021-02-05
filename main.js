Webcam.set({
    width:350,
    height:300,
    image_format:' png',
    png_quality:90
});
cam= document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Dup7q4Y3n/', modelLoaded);

function modelLoaded(){
console.log("model is loaded");
}
function check(){
img=document.getElementById("captured_image");
 classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}

else{
    console.log(results);
    document.getElementById("object_name").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);

    

}


}