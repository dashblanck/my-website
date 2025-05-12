function submitForm(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("formResponse").textContent =
    `Thanks for your message, ${name}!`;
}
