// script for a filterable list for searching through bakery products starts
// got input element from search field
let filterInput = document.getElementById("filterInput");

// added event listener to search field typing
filterInput.addEventListener("keyup", filterNames);

// created function called filterNames to run every time user starts typing in search field
function filterNames() {
  // got value of whatever bakery product user types in the search field
  let filterValue = document.getElementById("filterInput").value.toUpperCase();
  // console.log(filterValue);

  // got the complete unordered list
  let ul = document.getElementById("names");

  // got individual bakery items i.e. list items - got li from ul
  let li = ul.querySelectorAll("li.collection-item");

  // loop through all the collection items li
  for (let i = 0; i < li.length; i++) {
    // access all a tags within li items and store in variable
    let a = li[i].getElementsByTagName("a")[0];

    // if matched

    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// script for a filterable list for searching through bakery products ends
