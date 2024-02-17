const sendBtn = document.querySelector(".submit");
const input = document.querySelector(".form-control");
const check = /@gmail.com/g;

sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const email = input.value;

  email
    ? check.test(email)
      ? window.alert("You'll be updated with news, tips & tricks")
      : window.alert("Enter valid email")
    : window.alert("Enter your email");
});
