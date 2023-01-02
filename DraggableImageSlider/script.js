// store carousel class in carousel const variable
const carousel = document.querySelector(".carousel");

// store first img in firstImg const variable
const firstImg = carousel.querySelectorAll("img")[0];

// store wrapper i class in arrowIcons const variable
const arrowIcons = document.querySelectorAll(".wrapper i");

// create a boolean isDragStart and set it to false
let isDragStart = false,
  prevPageX,
  prevScrollLeft;

// create a variable firstImgWidth and set it to firstImg.clientWidth + 14
// clientWidth is the width of an element including padding
let firstImgWidth = firstImg.clientWidth + 14;

// create a function to move carousel to the left
arrowIcons.forEach((icon) => {
  // add click event listener to arrow icons
  icon.addEventListener("click", (e) => {
    // if clicked icon is left, reduce width value from the scroll left else add width value to the scroll left
    // scroll carousel to the left or right
    // depending on the arrow icon clicked
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
  });
});

// create a dragStart function and set isDragStart to true
const dragStart = (e) => {
  // updating global variables value on mouse down event

  // set isDragStart to true
  isDragStart = true;

  // store mouse page x in prevPageX
  // pageX is the horizontal coordinate of the mouse pointer
  prevPageX = e.pageX;

  // store carousel scroll left in prevScrollLeft
  // scrollLeft is the number of pixels that an element's content is scrolled to the left
  prevScrollLeft = carousel.scrollLeft;
};

// create dragging function to move carousel
const dragging = (e) => {
  // scrolling images carousel to the left according to mouse pointer position

  if (!isDragStart) return; // stop the function from running

  // prevent default
  // this will prevent the browser from selecting the image
  // when dragging the carousel
  // this will also prevent the browser from scrolling
  e.preventDefault();

  // store mouse page x - prevPageX in positionDiff
  let positionDiff = e.pageX - prevPageX;

  // set carousel scroll left to prevScrollLeft - positionDiff
  carousel.scrollLeft = prevScrollLeft - positionDiff;
};

// create dragStop function and set isDragStart to false
const dragStop = () => {
  isDragStart = false;
};

// add event listener to mousedown on carousel
carousel.addEventListener("mousedown", dragStart);

// add event listener to carousel to move carousel
carousel.addEventListener("mousemove", dragging);

// add event listener to mouseup on carousel
carousel.addEventListener("mouseup", dragStop);
