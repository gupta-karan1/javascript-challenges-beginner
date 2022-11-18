// let isRaining = true;
// let isDaylight = false;

// if (!isRaining && !isDaylight) {
//   document.write("Sit Outside");
// } else if (!isRaining && isDaylight) {
//   document.write("Go for a walk");
// } else if (isRaining && !isDaylight) {
//   document.write("Stay Indoors");
// } else if (isRaining && isDaylight) {
//   document.write("Wear a Raincoat");
// } else {
//   document.write("Do nothing");
// }

// let raining = window.prompt("Is it Raining");
// let isRaining = raining.toLowerCase() === "yes";
// let daylight = window.prompt("Is it Daylight?");
// let isDaylight = daylight.toLowerCase() === "yes";

// let x = "yes";
// let y = "yes";
// let z = x === y;
// document.write(z);

// if (!isRaining && !isDaylight) {
//   document.write("Sit Outside");
// } else if (!isRaining && isDaylight) {
//   document.write("Go for a walk");
// } else if (isRaining && !isDaylight) {
//   document.write("Stay Indoors");
// } else if (isRaining && isDaylight) {
//   document.write("Wear a Raincoat");
// } else {
//   document.write("Do nothing");
// }

// let userInput = window.prompt("Enter a number");

// while (userInput === "" || isNaN(userInput)) {
//   userInput = window.prompt("Enter a number!!!");
// }
// document.write(userInput);
// let x = 1;
// for (let i = 1; i < 21; i++) {
//   x = i * i;
//   document.write(i, " times ", i, " is: ", x);
//   document.write("<br>");
// }
// let x = 1;
// for (let i = 1; i < 21; i++) {
//   x = 8 * i;
//   document.write("8 times ", i, " is: ", x);
//   document.write("<br>");
// }

// for (let i = 50; i > 0; i--) {
//   document.write(i);
//   document.write("<br>");
// }

// let userInput = window.prompt("Enter a number");
// while (userInput === "" || isNaN(userInput)) {
//   userInput = window.prompt("Please enter a number");
// }

// document.write("Your entered number is:", userInput);
// document.write("<br>");
// // userInput = parseFloat(userInput);

// for (let i = 1; i < 21; i++) {
//   let x = i * userInput;
//   document.write(userInput, " times ", i, " = ", x);
//   document.write("<br>");
// }

// let userInput = window.prompt("Enter a number");
// 0,1,1,2,3,5,8,13,21...

//let's say user inputs 25, you want a fibonacci sequence till 25 i.e. till 21

// const userInput = parseInt(window.prompt("Enter a positive integer"));
// 0, 1, 1, 2, 3, 5, 8, ...

// let n1 = 0;
// let n2 = 1;

// document.write("Fibonacci Series: ");
// document.write("<br>");
// document.write(n1);
// document.write("<br>");
// document.write(n2);
// document.write("<br>");

// let nextTerm = n1 + n2;

// while (nextTerm <= userInput) {
//   document.write(nextTerm);
//   n1 = n2;
//   n2 = nextTerm;
//   nextTerm = n1 + n2;
//   document.write("<br>");
// }

//program to generate fibonacci series upto n terms
// take input from user

// const number = parseInt(window.prompt("Enter the number of terms: "));

// let n1 = 0;
// let n2 = 1;
// let nextTerm;

// document.write("Fibonacci Series: ");

// for (let i = 1; i <= number; i++) {
//   document.write(n1);
//   nextTerm = n1 + n2;
//   n1 = n2;
//   n2 = nextTerm;
//   document.write("<br>");
// }

//populate an empty array
// let numberArray = [];
// for (let i = 0; i < 10; i++) {
//   numberArray[i] = Math.floor(Math.random() * 20);
// }

// output the individual elements of the array
// for (let x = 0; x < numberArray.length; x++) {
//   const element = numberArray[x];
//   document.write(element);
//   document.write("<br>");
// }

// let newArray = [];
// for (let i = 0; i < 20; i++) {
//   newArray[i] = 10 + Math.floor(Math.random() * 90);
// }

// for (let x = 0; x < newArray.length; x++) {
//   const element = newArray[x];
//   document.write(x + " : ");
//   document.write(element);
//   document.write("<br>");
// }

// const userElement = [
//   "userName",
//   "userPassword",
//   "securityCode",
//   "dateOfBirth",
//   "addressLine1",
//   "addressLine2",
//   "currentBalance",
// ];
// const userValue = [
//   "keithgardiner",
//   "nama",
//   1234,
//   "11/05/1914",
//   "My House",
//   "My Street",
//   "-$3.6Bn",
// ];

// for (let i = 0; i < userElement.length; i++) {
//   const element = userElement[i] + " is " + userValue[i];
//   document.write(element);
//   document.write("<br>");
// }

// let sDuration = 216;
// let remainder = sDuration % 60;
// sDuration = Math.floor(sDuration / 60);
// let songDuration = sDuration + ":" + remainder;
// // document.write(songDuration);

// elementName = [
//   "songName",
//   "songDuration",
//   "artistName",
//   "albumName",
//   "albumYear",
//   "albumTrackIndex",
// ];

// elementValue = [
//   "I say a little prayer",
//   songDuration,
//   "Aretha Franklin",
//   "Aretha Now",
//   1968,
//   2,
// ];

// function songTable(elementName, elementValue) {
//   document.write("<table style = 'border: solid 2px black'>");
//   document.write("<thead>");
//   document.write("<tr>");

//   document.write("<th>");
//   document.write("Element");
//   document.write("</th>");

//   document.write("<th>");
//   document.write("Value");
//   document.write("</th>");

//   document.write("</tr>");
//   document.write("</thead>");

//   document.write("<tbody>");

//   for (let i = 0; i < elementName.length; i++) {
//     document.write("<tr>");

//     document.write("<td>");
//     document.write(elementName[i]);
//     document.write("</td>");

//     document.write("<td>");
//     document.write(elementValue[i]);
//     document.write("</td>");

//     document.write("</tr>");
//   }

//   document.write("</table>");
// }
// document.write("</tbody>");

// songTable(elementName, elementValue);

// let array1 = [1, 2, 3, 4, 5];
// let array2 = [4, 5, 6, 7, 8];
// songTable(array1, array2);

// function returnFunction() {
//   let functionStringVar = "This is a function";
//   return functionStringVar;
// }

// let myFunctionReturnVar = returnFunction();

// document.write("Function Return Value: ", myFunctionReturnVar);

// function algebraFunction(x, y) {
//   let z = 3 * x + 2 * y;
//   return z;
// }

// let myEquationResult = algebraFunction(900, 900);
// document.write("3x + 2y = ", myEquationResult);

// function multiplyTwoNums(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }
// num1 = window.prompt("Enter 1st number");
// num2 = window.prompt("Enter 2nd number");
// let finalResult = multiplyTwoNums(num1, num2);
// document.write(num1, " times ", num2, " = ", finalResult);

function multiplyAndDivide(num1, num2, num3) {
  let result = (num1 * num2) / num3;
  return result;
}
num1 = window.prompt("Enter 1st number");
num2 = window.prompt("Enter 2nd number");
num3 = window.prompt("Enter 3rd number");
let finalResult = multiplyAndDivide(num1, num2, num3);
document.write(
  " ( " + num1 + " * " + num2 + " ) " + " / " + num3 + " = " + finalResult
);

