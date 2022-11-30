function buttonPressed(selectButton) {
  var myTextObject = document.getElementById("myOutputText");

  if (selectButton.value === "button 1") {
    myTextObject.innerHTML = "Button 1 is clicked";
    myTextObject.style.backgroundColor = "yellow";
  } else {
    myTextObject.innerHTML = "Button 1 is clicked";
    myTextObject.style.backgroundColor = "pink";
  }
}
