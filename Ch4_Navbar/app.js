// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// 1. declare variables to grab the toggle button and the links
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// 2. add an event listener to the toggle button

navToggle.addEventListener("click", function () {
  //   console.log(links.classList); // use classList property to get all the classes of an element
  //   console.log(links.classList.contains("random")); //returns a false since the contains method returns whether or not that class is there
  //   console.log(links.classList.contains("links")); // returns true

  // 3. Using the longhand method of creating an else if statement
  //   if (links.classList.contains("show-links")) {
  //     links.classList.remove("show-links");
  //   } else {
  //     links.classList.add("show-links");
  //   }

  // 4. Using the shorthand method of using a toggle method
  links.classList.toggle("show-links");
});
