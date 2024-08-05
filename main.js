function preload()
{
    moustache = Loadimage("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fsearch%3Fq%3Dmoustache&psig=AOvVaw21_Wav9cBUFUu4h4X9fd_7&ust=1704843484350000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDl54n7zoMDFQAAAAAdAAAAABAQ")
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    poseNet = ml5.poseNet(video, ModelLoaded);

    poseNet.on("pose", gotPoses)
}

function draw(){
    image(video, 0, 0,300,300)
    fill(225,0,0);
    stroke(225,0,0);
    image(moustache, NoseX,NoseY);
}

function take_snapshot()
{
    save("filter moustache.png");
}

function ModelLoaded()
{
    console.log("PoseNet is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
    console.log(results);
    NoseX = results[0].pose.nose.x;
    NoseY = results[0].pose.nose.y;
    console.log("nose y is "+ results[0].pose.nose.y);
    console.log("nose x is "+ results[0].pose.nose.x);
    }
}