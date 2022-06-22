nosex=0;
nosey=0;
function preload()
{
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    Webcam.set({
        width:350,
        height:300,
        image_format:'png',
        png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("poseNet is initialized");
}
function draw()
{
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(nosex,nosey,20);
    image(clown_nose,nosex,nosey,30,30);
}
function take_snapshot()
{
    save('myfilter.png');
}
function gotPoses(results)
{
    if(results.length>0)
{
    console.log(results);
    nosex=results[0].pose.nose.x-10;
    nosey=results[0].pose.nose.y-10;
    console.log("nose x= "+results[0].pose.nose.x);
    console.log("nose y= "+results[0].pose.nose.y);
}
}