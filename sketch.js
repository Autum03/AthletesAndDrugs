var ellipseX = 400;
var ellipseY = 400;
var ellipseDiam = 50;

var speedX = 6;
var speedY = 8;

function setup() {
    createCanvas(800, 800)
}

function draw() {
    background('red');
    
    textSize(30)
    text('Hold mouse to make the ball move                                       When you release and press mouse again color changes', 100, 100)
    
    ellipse(ellipseX, ellipseY, ellipseDiam * 2, ellipseDiam * 2)
    
    if(mouseIsPressed) {
    
    
        background('red');

        ellipse(ellipseX, ellipseY, ellipseDiam * 2, ellipseDiam * 2)

        ellipseX += speedX;
        ellipseY += speedY;

        if (ellipseX > width || ellipseX < ellipseDiam) {

            speedX = -speedX   
        }

        if (ellipseY > height || ellipseY < ellipseDiam) {

            speedY = -speedY;
        }
    
    }
    

}


function mousePressed() {

    var r = random(255);
    var g = random(255);
    var b = random(255);
    fill(r, g, b)
    
    ellipseDiam++;

}