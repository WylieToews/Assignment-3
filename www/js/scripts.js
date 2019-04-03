var app = new Framework7 ({
    
    root: "#app",
    
    routes:[
        {
            path: '/home/',
            url: 'index.html',
        },
        {
            path: '/page2/',
            url: 'pages/page2.html'
        }
    ]
    
})

var mainView = app.views.create('.view-main');

document.addEventListener("deviceready", init, false);

var x, y, z;
var posX = window.innerWidth / 2;
var posY = window.innerHeight / 2;

var answers = [];
//console.log(answers);
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

    

}

function draw() {

    background(0);
    fill(0);

    if(posX < 100){
       answers++;
        if(answers>= 4){
            answers = 3;
        }
       }
    if(posX > 300){
       answers*2;
        if(answers>= 4){
            answers = 3;
        }
       }
    if(posY > 600){
       answers--;
        if(answers<= -1){
            answers = 0;
        }
       }
    if(posY < 350){
       answers/2;
        if(answers<= -1){
            answers = 0;
        }
       }
    


    
    ellipse(posX, posY, 100, 100);
}



var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="page2"]', function (e) {
    var cnv = createCanvas(window.innerWidth, window.innerHeight)
    cnv.parent("myCanvas");
    
        consol.dir(answers);
  // Do something here when page with data-name="about" attribute loaded and initialized
})
