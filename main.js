function preload()
{
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(10, 50);

    canvas = createCanvas(500, 500);
    canvas.position(560, 130);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("posenet is initialised");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}