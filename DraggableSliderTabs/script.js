// store .tabs-box class in tabsBox variable
const tabsBox = document.querySelector(".tabs-box");

// store .tab class in allTabs const variable
const allTabs = document.querySelectorAll(".tab");

// store .icon i class in arrowIcons const variable
const arrowIcons = document.querySelectorAll(".icon i");

// create a boolean variable to check if mouse is down or not
let isDragging = false;

// create handleIcons function
// handleIcons function is used to hide left arrow icon when tabsBox scrollLeft is 0
const handleIcons = () => {
  //  round scrollLeft value to nearest integer
  let scrollVal = Math.round(tabsBox.scrollLeft);

  // scrollWidth gets the width of an element's content, including content not visible on the screen due to overflow
  // clientWidth gets the width of an element, including padding, but not the vertical scrollbar, border, or margin
  // scrollWidth - clientWidth gives the maximum scrollable width
  let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;

  // console.log(scrollVal, maxScrollableWidth);

  arrowIcons[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";

  arrowIcons[1].parentElement.style.display =
    maxScrollableWidth > scrollVal ? "flex" : "none";
};

// add event listener to arrowIcons with click event and arrow function
// arrow function is used to access the icon id
// forEach() method executes a provided function once for each array element
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    // console.log(icon.id);

    //   if icon id is left, scroll left by 100px
    tabsBox.scrollLeft += icon.id === "left" ? -100 : 100;

    // handleIcons();
    //   cancel handleIcons after 50ms
    //   setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds
    setTimeout(() => handleIcons(), 50);
  });
});

allTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // console.log(tab);

    // remove active class from all tabs
    allTabs.forEach((tab) => tab.classList.remove("active"));

    // add active class to clicked tab
    tab.classList.add("active");

    // scroll to clicked tab
    // scrollIntoView() method scrolls the specified element into the visible area of the browser window
    tab.scrollIntoView({ behavior: "smooth", block: "center" });
  });
});

// create dragging function
const dragging = (e) => {
  // console log dragging...
  //   console.log("dragging...");

  // if isDragging is false, return
  if (!isDragging) return;

  // add dragging class to tabsBox
  tabsBox.classList.add("dragging");

  // scrollLeft gets or sets the number of pixels that an element's content is scrolled to the left
  // movementX gets the horizontal coordinate of the mouse pointer in global (screen) coordinates
  // movementX provides the difference in the X coordinate of the mouse pointer between the current event and the previous event
  tabsBox.scrollLeft -= e.movementX;

  // call handleIcons function
  handleIcons();
};

// create dragStop function
const dragStop = () => {
  // console log drag stop
  //   console.log("drag stop");

  // remove dragging class from tabsBox
  tabsBox.classList.remove("dragging");

  // set isDragging to false
  isDragging = false;
};

// add event listener to tabsBox with mousedown event and set isDragging to true
tabsBox.addEventListener("mousedown", () => (isDragging = true));

// add event listener to tabsBox with mousemove event and dragging function
tabsBox.addEventListener("mousemove", dragging);

// add event listener to tabsBox with mouseup event and dragStop function
document.addEventListener("mouseup", dragStop);
