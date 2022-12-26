// script for my grocery list feature - found under unity convertor feature within the navigation menu

// adding onclick function to push button

document.querySelector("#push").onclick = function () {
  // created if statement  to check for length of input and then allowing user to add item instead telling him to add something in the input field

  if (document.querySelector("#newTask input").value.length == 0) {
    alert("Please enter a item!");
  } else {
    document.querySelector("#tasks").innerHTML += `<div class = "task">
    <span id = "taskName">
        ${document.querySelector("#newTask input").value}
    </span>
    <button class = "delete">
        <i class="fas fa-trash-alt    "></i>
    </button>
</div>`;

    //   to delete an item from the shopping list
    let current_tasks = document.querySelectorAll(".delete");
    for (let i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    //   crossing off a bought item from the shopping list
    let tasks = document.querySelectorAll(".task");

    for (let i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
  }
  // clear out your input field after adding a grocery item to the list
  document.querySelector("#newTask input").value = "";
};

// script for my grocery list feature ends here
