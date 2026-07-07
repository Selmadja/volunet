const form = document.getElementById("signupForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if(password !== confirmPassword){
    message.style.color = "red";
    message.textContent = "Passwords do not match!";
    return;
  }

  message.style.color = "green";
  message.textContent = "Account created successfully!";

  form.reset();
});
const select = document.getElementById("typeSelect");
const personFields = document.getElementById("personFields");
const companyFields = document.getElementById("companyFields");

select.addEventListener("change", function () {
  personFields.classList.add("hidden");
  companyFields.classList.add("hidden");

  if (this.value === "person") {
    personFields.classList.remove("hidden");
  }

  if (this.value === "company") {
    companyFields.classList.remove("hidden");
  }
});