song1="";
song2="";
leftWristX =0;
leftWristY =0;
ScoreLeftWrist =0;
rightWristX=0
rightWrsitY=0;
ScorerightWrist =0;
function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");

}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}


function modelLoaded()
{
    console.log('poseNet is initialized!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist =" + scoreLeftWrist + "ScorerightWrist =" + ScorerightWrist);
  
        leftWristX = results[0].pose.leftWrist.x;
         leftWristY = results[0].pose.leftWrist.y;
        
         rightWristX = results[0].pose.rightWrist.x;
         rightWristY = results[0].pose.rightWrist.y;
       }
  }
  
  function draw() {
       image(video,0,0, 600, 500);
    status1 = song1.isPlaying();
    fill('red');
    stroke('black');
    if (ScoreLeftWrist > 0.2) {
      circle(leftWristX, leftWristY, 50);
     song2.stop();
      if (status1 == false) {
       song1.play();
        document.getElementById("song").innerHTML = "song1";
      }
    }
    status2 = song2.isPlaying();
    fill('red');
    stroke('black');
    if (ScorerightWrist > 0.2) {
      circle(rightWristX, rightWristY, 50);
     song1.stop();
      if (status2 == false) {
       song2.play();
        document.getElementById("song").innerHTML = "song2";
      }
    }
  }