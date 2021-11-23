function setup(){
    canvas = createCanvas(500,550);
    canvas.position(600,150);

    video = createCapture(VIDEO);
    video.size(500,500);

    Posnet = ml5.poseNet(video, modelloaded);
    Posnet.on('pose', gotresults);
}

function modelloaded(){
    console.log("Model has been loaded");
}

function gotresults(results){
    if(results.length>0){
        console.log(results);
    }
}

function draw(){
    background("#CBC3E3");

}