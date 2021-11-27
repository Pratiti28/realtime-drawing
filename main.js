music="";
music2="";
leftx=0;
rightx=0;
lefty=0;
righty=0;

function preload(){
    music=loadSound("music.mp3");
    music2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on("pose",gotposes);
}

function draw(){
    image(video,0,0,600,500);
}

function modelloaded(){
    console.log("model is loaded");
}

function gotposes(results){
if(results.length >0){
    console.log(results);
    leftx=results[0].pose.leftWrist.x;
    lefty=results[0].pose.leftWrist.y;
    rightx=results[0].pose.rightWrist.x;
    righty=results[0].pose.rightWrist.y;
}
}