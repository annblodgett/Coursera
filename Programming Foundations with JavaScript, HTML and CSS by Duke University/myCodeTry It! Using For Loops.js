
//Make a yellow square that is 200 pixels wide and 200 pixels high

var img = new SimpleImage(200,200);

for (var pixel of img.values()) {

pixel.setRed(255);
pixel.setGreen(255);
pixel.setBlue(0);

}
print(img);

//Make your image magenta instead of yellow


for (var pixel of img.values()) {

pixel.setRed(255);
pixel.setGreen(0);
pixel.setBlue(255);

}
print(img);
