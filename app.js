// Question 01

var studentNames = [];

// Question 02

var studentNames = new Array();


// Question 03

var fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];


// Question 04

var numbers = [1, 2, 3, 4, 5];


// Question 05

var booleanArray = [true, false, true, false, true];


// Question 06

var mixedArray = [1, "hello", true, { name: "John" }, [1, 2, 3], null];


// Question 07

var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

document.write("<h2>Qualifications</h2>");

document.write("1. " + qualifications[0] + "<br>")
document.write("2. " + qualifications[1] + "<br>")
document.write("3. " + qualifications[2] + "<br>")
document.write("4. " + qualifications[3] + "<br>")
document.write("5. " + qualifications[4] + "<br>")
document.write("6. " + qualifications[5] + "<br>")
document.write("7. " + qualifications[6] + "<br>")
document.write("8. " + qualifications[7] + "<br>")


// Question 08

var studentNames = ["Alice", "Bob", "Charlie"];

var scores = [320, 230, 480];

var totalMarks = 500;

var percentage1 = (scores[0] / totalMarks) * 100;
var percentage2 = (scores[1] / totalMarks) * 100;
var percentage3 = (scores[2] / totalMarks) * 100;

document.write("<h2>Percentages</h2>");

document.write("Scores of " + studentNames[0] + " is " + scores[0] + ". " + "Percentages: " + percentage1 + "%" + "<br>")
document.write("Scores of " + studentNames[1] + " is " + scores[1] + ". " + "Percentages: " + percentage2 + "%" + "<br>")
document.write("Scores of " + studentNames[2] + " is " + scores[2] + ". " + "Percentages: " + percentage3 + "%" + "<br>" + "<br>")


// Question 09

var colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange",];

document.write(colors);

// // a
// var colorToAddBeginning = prompt("Enter a color to add to the beginning of the array:");
// if (colorToAddBeginning) {
//   colors.unshift(colorToAddBeginning);
//   document.write("," + colorToAddBeginning);
// };

// // b
// var colorToAddEnd = prompt("Enter a color to add to the end of the array:");
// if (colorToAddEnd) {
//   colors.push(colorToAddEnd);
//   document.write("," + colorToAddEnd + ",");
// }

// // c
// colors.unshift("Pink", "Brown");
// document.write(colors);

// // d
// colors.shift();
// displayColors();

// // e
// colors.pop();
// displayColors();


// Question 10

document.write("<h2>Scores of Students</h2>");

var scores = [320, 230, 480, 120];

document.write("Scores of Students: " + scores + "<br>");

scores.sort();

document.write("Ordered Scores of Students: " + scores);


// Question 11

document.write("<h2>Selected Cities</h2>");

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", "Multan", "Faisalabad"];

document.write("City names: " + cities + "<br>");

var selectedCities = cities[5];

document.write("Selected Cities: " + selectedCities + "<br>" + "<br>");

// Question 12

var arr = ["This ", " is ", " my ", " cat"];

document.write("Array:" + "<br>");
document.write(arr + "<br>");

document.write("String:" + "<br>");
var joinedString = arr.join('');
document.write(joinedString + "<br>");

// Question 13


var devices = ["keyboard", "mouse", "printer", "monitor"]

document.write("<h1>(FIFO-First In First Out)</h1>")
var out = devices.shift()
document.write("<h2>Out</h2>")
document.write(out)
var out = devices.shift()
document.write("<h2>Out</h2>")
document.write(out)
var out = devices.shift()
document.write("<h2>Out</h2>")
document.write(out)
var out = devices.shift()
document.write("<h2>Out</h2>")
document.write(out)

// Question 14

var devicess = ["keyboard", "mouse", "printer", "monitor"]

document.write("<h1>(Last In-First Out)</h1>")
var out = devicess.pop()
document.write("<h2>Out</h2>")
document.write(out)
var out = devicess.pop()
document.write("<h2>Out</h2>")
document.write(out)
var out = devicess.pop()
document.write("<h2>Out</h2>")
document.write(out)
var out = devicess.pop()
document.write("<h2>Out</h2>")
document.write(out)

// Question 15

var manufactures = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write("<h1>(Dropdown)</h1>")

document.write('<select>');

document.write('<option value = " ' + manufactures[0] + '">' + manufactures[0] + '</option>');
document.write('<option value = " ' + manufactures[1] + '">' + manufactures[1] + '</option>');
document.write('<option value = " ' + manufactures[2] + '">' + manufactures[2] + '</option>');
document.write('<option value = " ' + manufactures[3] + '">' + manufactures[3] + '</option>');
document.write('<option value = " ' + manufactures[4] + '">' + manufactures[4] + '</option>');
document.write('<option value = " ' + manufactures[5] + '">' + manufactures[5] + '</option>');

document.write('</select>');

document.write('<br>' + '<br>'+ '<br>');
