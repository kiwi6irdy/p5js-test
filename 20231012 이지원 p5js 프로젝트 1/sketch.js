function setup() {
 
  createCanvas(800, 400);

}



function draw() {

  //얼굴모형

  background(166,217,106);
 
  strokeWeight(4);
  ellipse(200,200,200,200);
  arc(200,158,150,200,1/4*PI,3/4*PI);
  fill(255);
  strokeWeight(3);
  ellipse(170,180,15,20);
  ellipse(230,180,15,20);
  fill(0);
  ellipse(170,180,5,9);
  ellipse(230,180,5,9);
 
  fill(35,145,255);
 
  strokeWeight(4);
  rect(450,120,250,200);
  line(500,160,550,190);
  line(650,160,600,190);
  arc(575,315,150,200,5/4*PI,7/4*PI);

  fill(255,245,20);
 

   }