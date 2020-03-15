/* Part 1: A JavaScript program that modifies an image by putting three vertical stripes on it - a red stripe on the left one third, a green stripe in the middle, and a blue stripe on the right one third.*/


//1. Start with the image you want to change.

var img = new SimpleImage("hilton.jpg");

print(img);

function rgbStripes(img){
//2. Figure out the width of the image.
var width = img.getWidth();
print(width);



//3. For each pixel in the image:
for(var pixel of img.values()){
    
//Get the x-coordinate for that pixel
var x = pixel.getX();
//If the pixel’s x-coordinate is less than one-third of the image’s width, set the pixel’s red value to 255.
if(x >= 0 && x < (width/3)){
    pixel.setRed(255);
}

//If the pixel’s x-coordinate is between one-third and two-thirds of the image’s width, set the pixel’s green value to 255.
else if(x >=(width/3) && x < ((width*2)/3)){
    pixel.setGreen(255);
}
//If the pixel’s x-coordinate is more than two-thirds of the image’s width, set the pixel’s blue value to 255.
else{
    pixel.setBlue(255);
}
}
//4. Print the image.
print(img);
}

rgbStripes(img);

/* Part 2: Write a JavaScript function named swapRedGreen with one parameter pixel (representing a single pixel). This function should swap the red and green values of the pixel. For example, if you have a pixel with red = 255, green = 100, blue = 150, after calling swapRedGreen on that pixel its new RGB values would be red = 100, green = 255, blue = 150. */

function swapRedGreen(pixel){
    var newGreen = pixel.getRed();
    var newRed = pixel.getGreen();
    
    pixel.setGreen(newGreen);
    pixel.setRed(newRed);
}

for(var pixel of img.values()){
    swapRedGreen(pixel);
}

print(img);

/* Part 3 Write code to change the Duke blue devil (the image below on the left) to be yellow (as in the image below on the right). */


function blueToYellow(pixel){
    var blueValue = pixel.getBlue();
    var redValue = pixel.getRed();
    var greenValue = pixel.getGreen();
    
    if(blueValue >redValue && blueValue > greenValue){
        pixel.setBlue(0);
        pixel.setGreen(255);
        pixel.setRed(255);
    }
}

var img2 = new SimpleImage("duke_blue_devil.png");

print(img2);

for(pixel of img2.values()){
    blueToYellow(pixel);
}

print(img2);