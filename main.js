lipX=0;
lipY=0;

function preload()
{
lipstick=loadImage('https://i.postimg.cc/qv4mVZFq/image-removebg-preview-5.png');
}

function setup()
{
canvas=createCanvas(400,400);
canvas.center();
video=createCapture(VIDEO);
video.hide()
video.size(400,400);
posenet=ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function modelLoaded()
{
console.log("posenet is loaded!=)");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        lipX=results[0].pose.nose.x;
        lipY=results[0].pose.nose.y;
        console.log("nose x coord. is="+lipX);
        console.log("nose y coord. is="+lipY);

    }
}

function draw()
{
image(video,0,0,400,400);
image(lipstick,lipX-20,lipY+20,50,50);
}

function take_snapshot()
{
save("my_lipstick.png");
}