var stepSize = 20;

function setup() {
  createCanvas(500, 500);
}
///////////////////////////////////////////////////////////////////////
function draw() {
  background(0);
  fill(255);

  colorGrid();
  compassGrid();
}
///////////////////////////////////////////////////////////////////////
function colorGrid(){
  // your code here
  var col2=color(51, 255, 255);//changing the color red to cyan for further development
  var col1=color(61, 90, 255 );//changing the color green to blue for further development
  //var red=color(255,0,0); 
  //var red=color(255,0,0); 


  mouseval=mouseX*0.01;
  for( var i=0;i<25;i++){
    for( var j=0;j<25;j++){
      var keyx=(i*stepSize+frameCount*mouseval)*0.007;
      var keyy=(j*stepSize+frameCount*mouseval)*0.007;
      var noi=noise(keyx,keyy);//generatign a 3D noise value 
      var cl=lerpColor(col1,col2,noi);//getting colors to fill the rectangle
      fill(cl);//filling the rect color
      strokeWeight(0);
      rect(i*stepSize, j*stepSize, stepSize, stepSize); // drawing rectangles 25X25 of size 20 
    }
  }
   
}
///////////////////////////////////////////////////////////////////////
function compassGrid(){
  // your code here
  var black=color(0);
  var white=color(255);

  var movement = map(mouseX, 0, width, 0,1);
  for( var x=0;x<25;x++){
    for( var y=0;y<25;y++){
      var kx=(x*stepSize+frameCount*movement)*0.0035;
      var ky=(y*stepSize+frameCount*movement)*0.0035;
      var noi=noise(kx,ky);//generatign a 3D noise value 
      var col=lerpColor(black,white,noi);
      var deg=map(noi,0,1,0,720);//to generate angle between 0 and 720 degrees.
      var len= map(noi,0,1,5,25)////to generate length between 5 and 25 .
      push();
      translate(x*20+10,y*20+10);
      fill(col);
      rotate(radians(deg));
      rect(0,0,4,len);
      pop();
    }
  }
}
