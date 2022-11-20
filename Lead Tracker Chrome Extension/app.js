//1. grab user inputs as an array
let myLeads = [];

//2. grab the input element from the html dom and store it in a variable
const inputEl = document.getElementById("input-el");

//3. grab the input button and store it in a variable
const inputBtn = document.getElementById("input-btn");

//5. grab the unordered list from the html dom and store it in a variable where the inputs will be displayed
const ulEl = document.getElementById("ul-el");

// 4. take the input value from the user and store it in an array when the user clicks on save input
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //10. Call the renderLeads function
  renderLeads();
  inputEl.value = "";
});

// 9. Wrap the below code in a function called renderLeads()
function renderLeads() {
  // 6. Create a variable, listItems to hold all the HTMl for the list items
  let listItems = "";

  // 7. Add the item to the listItems variable
  for (let i = 0; i < myLeads.length; i++) {
    //11. Wrap the lead in an anchor tag inside the li
    // listItems += "<li><a href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    // 12. Use template strings to make the syntax simpler
    listItems += `
      <li>
        <a target='_blank' href = '${myLeads[i]}'>
        ${myLeads[i]}
        </a>
      </li>
    `;
  }

  // 8. Render the listItems inside the unordered list using innerHTML
  // DOM Manipulation comes at a cost. So do it less times.
  ulEl.innerHTML = listItems;

  // 6.1 alternative method
  // for (let i = 0; i < myLeads.length; i++) {
  //   // create list element
  //   // set text content:
  //   // append to ul
  //   const li = document.createElement("li");
  //   li.textContent = myLeads[i];
  //   ulEl.append(li);
  // }
}
