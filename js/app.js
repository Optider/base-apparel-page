let form = document.querySelector(".form");

let email = document.querySelector("#input_email");
let status = document.querySelector(".status");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateEmail(email.value)) {
    status.classList.add("error");
    status.classList.remove("success");
    status.innerHTML = "Please enter a valid email address";
  } else {
    status.classList.remove("error");
    status.classList.add("success");
    status.innerHTML = "Thank you! Check your email to confirm your email subscription.";
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
