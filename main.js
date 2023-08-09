function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(560, 100);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        
    }
    
}
function draw(){
    background('pink');
    document.getElementById("font").innerHTML = "the size of a Square is = " + difference +" px ";
    fill('red');
    stroke('blue');
   text('Krisha', noseX , noseY);
   textSize(difference);

}