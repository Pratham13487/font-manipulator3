leftwristX=0;
rightwristX=0;


noseX=0;
noseY=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,500);
    canvas.position(800,130);

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function draw(){
    background('#33e84e');
    fill("darkblue")
    difference=leftwristX-rightwristX;
    textSize(difference)
    text("abcdefghijk",noseX,noseY)

}
function modelloaded(){
    console.log("Posenet Is Initialized");
}
function gotposes(result){
    if(result.length >0){
        console.log(result);
        leftwristX=result[0].pose.leftWrist.x;
        
        rightwristX=result[0].pose.rightWrist.x;
        
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
    }
}