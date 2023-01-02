// store carousel class in carousel const variable
const carousel = document.querySelector(".carousel");

// store first img in carousel in firstImg const variable
const firstImg = carousel.querySelectorAll("img")[0];

// store wrapper i class in arrowIcons const variable
const arrowIcons = document.querySelectorAll(".wrapper i");

// create a boolean isDragStart and set it to false
let isDragStart = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

// create a variable firstImgWidth and set it to firstImg.clientWidth + 14
// clientWidth is the width of an element including padding
let firstImgWidth = firstImg.width + 14;

console.log(firstImgWidth);

// create a variable scrollWidth and set it to carousel.scrollWidth - carousel.clientWidth
// scrollWidth is the width of an element's content including content not visible on the screen due to overflow
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;

// create a function to show and hide arrow icons
const showHideIcons = () => {
  // if carousel scroll left is equal to 0, hide left arrow icon else show left arrow icon
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
};

// if carousel scroll left is equal to scrollWidth, hide right arrow icon else show right arrow icon
arrowIcons[1].style.display =
  carousel.scrollLeft == scrollWidth ? "none" : "block";

// create a function to move carousel to the left
arrowIcons.forEach((icon) => {
  // add click event listener to arrow icons
  icon.addEventListener("click", () => {
    // if clicked icon is left, reduce width value from the scroll left else add width value to the scroll left
    // scroll carousel to the left or right
    // depending on the arrow icon clicked
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;

    // set timeout to show and hide arrow icons
    setTimeout(() => {
      showHideIcons();
    }, 60);
  });
});

// create a function to auto slide carousel
const autoSlide = () => {
  // make positionDiff value to positive
  positionDiff = Math.abs(positionDiff);
  let firstImgWidth = firstImg.width + 14;
  let valDifference = firstImgWidth - positionDiff;

  if (carousel.scrollLeft > prevScrollLeft) {
    // if positionDiff is greater than firstImgWidth / 3, scroll carousel to the right
    // else scroll carousel to the left
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }

  // if positionDiff is greater than firstImgWidth / 3, scroll carousel to the left
  // else scroll carousel to the right
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

// create a dragStart function and set isDragStart to true
const dragStart = (e) => {
  // updating global variables value on mouse down event

  // set isDragStart to true
  isDragStart = true;

  // store mouse page x in prevPageX
  // pageX is the horizontal coordinate of the mouse pointer
  // when a touch event occurs, the pageX property returns the horizontal coordinate
  prevPageX = e.pageX || e.touches[0].pageX;

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

  carousel.classList.add("dragging");

  // store mouse page x - prevPageX in positionDiff
  // pageX is the horizontal coordinate of the mouse pointer
  // when a touch event occurs, the pageX property returns the horizontal coordinate
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;

  // set carousel scroll left to prevScrollLeft - positionDiff
  carousel.scrollLeft = prevScrollLeft - positionDiff;

  showHideIcons();
};

// create dragStop function and set isDragStart to false
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  autoSlide();
};

// add event listener to mousedown on carousel
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

// add event listener to carousel to move carousel
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

// add event listener to mouseup on carousel
carousel.addEventListener("mouseup", dragStop);

// add event listener to mouseleave on carousel
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
