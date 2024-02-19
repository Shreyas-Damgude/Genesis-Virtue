const submitBtn = document.querySelector(".submit");
const subscribeForm = document.querySelector(".form");
const detailsForm = document.querySelector(".form-box");
const subscribeBtn = document.querySelector(".subscribe");

const check = /@gmail.com/;
const info = [];

if (subscribeBtn)
  subscribeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const dataArray = [...new FormData(subscribeForm)];
    const data = Object.fromEntries(dataArray);
    const email = data.email;

    email
      ? check.test(email)
        ? window.alert("You will be updated with news, tips and tricks")
        : window.alert("Enter valid email address")
      : window.alert("Enter your email address");

    info.push(data);

    subscribeForm.reset();
  });

if (submitBtn)
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const dataArray = [...new FormData(detailsForm)];
    const empty = dataArray.findIndex(([_, value]) => value === "") + 1;
    const email = dataArray.find(([field, _]) => field === "email");

    empty
      ? window.alert(`Enter ${dataArray[empty - 1][0]}`)
      : validGmail(email[1]);

    function validGmail(email) {
      if (check.test(email)) {
        window.alert("Thank You");
        detailsForm.reset();
      } else {
        window.alert("Enter valid email address");
      }
    }
  });
