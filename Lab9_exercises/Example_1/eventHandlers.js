// function buttonOne() {
//   var myTextObject = document.getElementById("myOutputText");
//   myTextObject.innerHTML = "Button 1 Clicked";
// }

// function buttonTwo() {
//   var myTextObject = document.getElementById("myOutputText");
//   myTextObject.innerHTML = "Button 2 Clicked";
// }

// function buttonPressed(buttonOne) {
//   if (buttonOne) {
//     var myTextObject = document.getElementById("myOutputText");
//     myTextObject.innerHTML = "Button 1 clicked";
//   } else {
//     var myTextObject = document.getElementById("myOutputText");
//     myTextObject.innerHTML = "Button 2 clicked";
//   }
// }

function buttonPressed(object) {
  var myTextObject = document.getElementById("myOutputText");
  myTextObject.innerHTML = object.value + " is Clicked";
}
