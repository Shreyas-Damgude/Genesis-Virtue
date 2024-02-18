const sendBtn = document.querySelector(".submit");
const input = document.querySelector(".form-control");
const check = /@gmail.com/g;

sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const email = input.value;

  if (!email) {
    window.alert("Enter your email");
    return;
  }

  if (!check.test(email)) {
    window.alert("Enter valid email");
    return;
  }
  sendEmail();

  input.textContent = "";
});

function sendEmail() {
  fetch("../../mail.php", {
    method: "POST", // Adjust method if needed (GET, PUT, etc.)
    body: JSON.stringify({
      // Optional data to send to PHP
      name: "John Doe",
      email: "johndoe@example.com",
      message: "Hello from JavaScript!",
    }),
  })
    .then((response) => response.text())
    .then((data) => {
      // Handle response from PHP, e.g., display success message
      console.log(data);
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
    });
}
