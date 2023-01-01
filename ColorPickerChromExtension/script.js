// store the color picker button in a variable
const colorPickerBtn = document.querySelector("#color-picker");

// store the colors list container in a variable
const colorList = document.querySelector(".all-colors");

// get the chosen colors or empty array from the local storage
const pickedColors = JSON.parse(localStorage.getItem("picked-colors")) || [];

// create a clearAll variable to clear all the colors
const clearAll = document.querySelector(".clear-all");

// create a copyColor function to copy the color code
const copyColor = (elem) => {
  //   console.log(elem);
  //   copy the selected text to the clipboard
  navigator.clipboard.writeText(elem.dataset.color);

  //  change the text of the element to Copied!
  elem.innerText = "Copied!";

  //  change the text back to the color code after 1 second
  setTimeout(() => (elem.innerText = elem.dataset.color), 1000);
};

// create a showColors function to show the colors
const showColors = () => {
  // return if there are no picked colors
  if (!pickedColors.length) return;

  // create a map function to loop through the pickedColors array and return the color elements
  // use the ternary operator to check if the color is white, if it is, change the border color to #ccc
  // use the join method to join the color elements into a string
  // store the string in the innerHTML of the colorList variable
  colorList.innerHTML = pickedColors
    .map(
      (color) => `
    <li class="color">
            <span class="rect" style="background: ${color}; border: 1px solid ${
        color == "#ffffff" ? "#ccc" : color
      }"></span>
            <span class="value" data-color="${color}">${color}</span>
          </li>
    `
    )
    .join("");

  // remove the hide class from the picked-colors container
  document.querySelector(".picked-colors").classList.remove("hide");

  // add a click event listener to each color element to copy the color code
  document.querySelectorAll(".color").forEach((li) => {
    li.addEventListener("click", (e) =>
      copyColor(e.currentTarget.lastElementChild)
    );
  });
};

// call the showColors function to show the colors
showColors();

// use async/await to get the color picker value
const activateEyeDropper = async () => {
  //   use try/catch to catch any errors
  try {
    // create a new eyeDropper object to get the color from the screen
    const eyeDropper = new EyeDropper();

    // open the eyeDropper and store the response in a variable
    //   the response is an object with the sRGBHex property
    const { sRGBHex } = await eyeDropper.open();

    //   copy the selected text to the clipboard
    navigator.clipboard.writeText(sRGBHex);

    //   create an if else statement to check if the pickedColors array includes the sRGBHex value
    if (!pickedColors.includes(sRGBHex)) {
      //   push the sRGBHex value to the pickedColors array
      pickedColors.push(sRGBHex);

      //  log the pickedColors array to the console
      // console.log(pickedColors);

      //   store the the pickedColors array in the local storage
      localStorage.setItem("picked-colors", JSON.stringify(pickedColors));

      //   call the showColors function to show the colors
      showColors();
    }
  } catch (error) {
    // catch the error
    console.log(error);
  }
};

// create a clearAllColors function to clear all the colors
const clearAllColors = () => {
  // clear the pickedColors array
  pickedColors.length = 0;

  //  store the the pickedColors array in the local storage
  localStorage.setItem("picked-colors", JSON.stringify(pickedColors));

  // add the hide class to the picked-colors container
  document.querySelector(".picked-colors").classList.add("hide");
};
// add event listener to the color picker button
colorPickerBtn.addEventListener("click", activateEyeDropper);

// add event listener to the clearAll button
clearAll.addEventListener("click", clearAllColors);
