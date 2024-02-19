const submitBtn = document.querySelector(".submit");
const detailsForm = document.querySelector(".form-box");

const check = /@gmail.com/;
const info = [];

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
