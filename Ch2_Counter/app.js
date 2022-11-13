// set initial count
let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// console.log(buttons);

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    // console.log(styles);

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "blue";
    }

    value.textContent = count;
  });
});
