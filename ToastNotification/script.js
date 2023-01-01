// create a notifications variable storing all li elements with class notifications
const notifications = document.querySelector(".notifications"),
  buttons = document.querySelectorAll(".buttons .btn");

// create a toastDetails object storing toast details
const toastDetails = {
  timer: 5000,
  success: {
    icon: "fas fa-check-circle",
    text: "Success: This is a success toast.",
  },

  error: {
    icon: "fas fa-exclamation-circle",
    text: "Error: This is an error toast.",
  },

  warning: {
    icon: "fas fa-exclamation-triangle",
    text: "Warning: This is a warning toast.",
  },

  info: {
    icon: "fas fa-info-circle",
    text: "Info: This is an info toast.",
  },
};

// create a removeToast function
const removeToast = (toast) => {
  // add hide class to toast variable
  toast.classList.add("hide");

  if (toast.timeoutId) clearTimeout(toast.timeoutId);

  // remove toast variable after 500ms
  // setting a timeOut to remove the toast after 500ms
  setTimeout(() => toast.remove(), 500);
};

// create a createToast function
const createToast = (id) => {
  // getting the icon and text from toastDetails object based on id parameter
  const { icon, text } = toastDetails[id];

  // create a toast variable storing a li element
  const toast = document.createElement("li");

  // add toast class to toast variable
  toast.className = `toast ${id}`;

  // add toast variable to ul element with class toast-container
  toast.innerHTML = `<div class="column">
                    <i class="fas ${icon}"></i>
                    <span>${text}</span>
                    </div>
                    <i class="fas fa-times" onclick="removeToast(this.parentElement)"></i>`;

  // add toast variable to ul element with class notifications
  notifications.appendChild(toast);

  // remove toast variable after 5 seconds
  // setting a timeOut to remove the toast after 5 seconds
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
};

// add event listener to each button
// when button is clicked, call createToast function
buttons.forEach((btn) => {
  btn.addEventListener("click", () => createToast(btn.id));
});
