function buttonPressed(selectButton) {
  var myTextObject = document.getElementById("myOutputText");

  if (selectButton.value === "button 1") {
    myTextObject.innerHTML = "Button 1 Clicked";
    buttonOneCount += 1;
    var myButtonObject = document.getElementById("buttonOneCountText");
    myButtonObject.innerHTML = buttonOneCount;
  } else {
    myTextObject.innerHTML = "Button 2 Clicked";
    buttonTwoCount += 1;
    var myButtonObject = document.getElementById("buttonTwoCountText");
    myButtonObject.innerHTML = buttonTwoCount;
  }
}
