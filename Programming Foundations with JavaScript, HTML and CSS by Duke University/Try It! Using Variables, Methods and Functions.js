// write a function that adds three numbers together

//Input (1, 3, 5)
//Expected Out: 9
function addThree(num1, num2, num3) {
    return num1 + num2 + num3;
}

print(addThree(1, 3, 5));

/*Write a function that adds two strings. Remember that addings strings means concatenating, so “a” + “b” is “ab” and “b” + “a” is “ba”.*/

function concatStrings(str1, str2) {
    return str1 + str2;
}

print(concatStrings("a", "b"));
print(concatStrings("b", "a"));

//Write a function that prints the width and height of an image.

function printWidthAndHeight(img) {
    var width = img.getWidth();
    var height = img.getHeight();

    print(width + " X " + height);

    return null;
}

var image = new SimpleImage("chapel.png");
printWidthAndHeight(image);