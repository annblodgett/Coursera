//Programming Exercise: Advanced Modifying Images

/*Part 1: Write the green screen algorithm you saw in the lecture video yourself.

//1. Start with the foreground image  (fgimage)

var fgimage = new SimpleImage("drewRobert.png");

//2. and with the background image (bgimage)
var bgimage = new SimpleImage("dinos.png");

//3. Make a plank image of the same size (output)
var output = new SimpleImage (1920, 1080);

// 4.For each pixel (currentPixel) of fgimage

for(var pixel of fgimage.values()){

var x = pixel.getX();
var y = pixel.getY();

var outputPixel = output.getPixel(x,y);

// A. Look at the current Pixel and if it is green
if(pixel.getGreen() > 240){
    
// a. Look at the same position in bgimage
    var bgPixel =  bgimage.getPixel(x,y);
// b.  and set the output's corresponding pixel to bgimage's pixel.
    output.setPixel(x, y, bgPixel);
}
//B. Otherwise: set the outputs corresponding pixel to fgimage's pixel
else{
    output.setPixel(x, y, pixel);
}
    
}

print(output);
/*
/* Part 2: find and fix the bug in a program meant to great a 2x2 image

[red][green]
[magenta][blue]

Instead it makes 

[yellow][green]
[magenta][blue]

Original Code:

var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  else {
    px.setGreen(255);
  }
}
print (img);
*/


var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  else {
    px.setGreen(255);
  }
}
print (img);
