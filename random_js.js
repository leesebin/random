//int width = 800;
//int height = 400;

function setup(){
  createCanvas(900, 600);
  frameRate(12);
}

function draw(){}
function mouseClicked(){background(254); grrr();}

function grrr(){
  background(254);
  noStroke();
  stroke(#512800);
  strokeWeight(3);
  for(var i=0; i<width; i=i+60){
    for(var j=0; j<height; j=j+60){
      color c = color(var(random(170,255)), var(random(170,255)),var(random(120,255)));
      var alpha = var(random(12,250));
      var size = 60;
      fill(c,alpha);
      rect(i,j,size,size);
    }
  }
}
 
