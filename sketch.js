//author: khushi
//  instruction to interact - 
//  when the mouse moves to the left - rotate counterclockwise
//  when the mouse moves to the right - rotate clockwise
 


//  function setup - initiate the whole program. 
// It only run ONCE. 

let gap=10; //gap b/w circles
let cirNum = 40; //total circles
let cirSize = 20; //size of the smallest circle 
let angle = 0;
let ptNum = 50;
let rectSize = 600;
 function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(degrees);
}


//  function draw - draw loops FOREVER.
function draw() {
  background("#1e1d1d");
  // a customised shape for mouse
   noCursor();
   circle(mouseX, mouseY, 7);
   fill("white");
   noStroke();


  //  main graph
    push(); //start a new drawing state
      translate(width/2, height/2); // x & y position of the circle (origin)
      angle = angle+map(mouseX, 0, width, -0.1, 0.1);
      rotate(angle);
      noFill();
      stroke("white");
      strokeWeight(1);
      for (let i=0; i<cirNum; i++){
      arc(0, 0, cirSize + gap *i, cirSize + gap *i, angle*i, 360 - angle/2)}
    pop(); //restores the state 

     //title, subtitle
     push();
     noStroke();
     translate(width/2, height-260);
     textFont('Arial');
     textSize(20);
     textAlign(CENTER, CENTER);
     text('U.F.O', 0, 0);
     textSize(14);
     text('21. 6. 1981', 0, 30);
     pop();

     //border
     push();
     translate(width/2, height/2);
     noFill();
     stroke('white');
     strokeWeight(1);
     rectMode(CENTER);
     rect(0, 0, rectSize, rectSize);

      //random noise in background
      stroke("white");
      strokeWeight(2);
      for ( let i=0; i<ptNum; i++){
      point(random(-rectSize/2, rectSize/2), random(-rectSize/2, rectSize/2));}

      pop();

      //outer border
      noFill();
      stroke("white");
      strokeWeight(1);
      rectMode(CENTER);
      rect(width/2, height/2, 620, 620);
}
