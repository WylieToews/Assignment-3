var app = new Framework7 ({
    
    root: "#app",
    
    routes:[
        {
            path: '/home/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: '.pages/page2.html'
        }
    ]
    
})

var mainView = app.views.create('.view-main');

document.addEventListener("deviceready", init, false);

var x, y, z;
var posX = window.innerWidth / 2;
var posY = window.innerHeight / 2;

var answers = [];

$('a').on("click", function(){
    var a1 = $("#a1").val();
    answer.push(a1);
    var a2 = $("#a2").val();
    answer.push(a2);
    var a3 = $("#a3").val();
    answer.push(a3);
    var a4 = $("#a4").val();
    answer.push(a4);
})

function init() {



    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleOrientation)
        console.log();
    } else {
        alert("no dice")
    }

    function handleOrientation(event) {
        z = event.alpha
        y = event.beta
        x = event.gamma
        
        posX = map(x, -180, 180, 0, window.innerWidth)
        posY = map(y, -90, 90, 0, window.innerHeight)
        
        posX += x;
        posY += y;

        $("#alpha").html(z)
        $("#beta").html(x)
        $("#gamma").html(y)
    }

}



function setup() {

    var cnv = createCanvas(window.innerWidth, window.innerHeight)
    cnv.parent("myCanvas");

}

function draw() {

    background(0);
    fill(0);

    if(posX < 100){
       fill(100);
       }
    if(posX > 300){
       fill(100);
       }
    if(posY > 600){
       fill(100);
       }
    if(posY < 350){
       fill(100);
       }

    
    ellipse(posX, posY, 100, 100);
}
