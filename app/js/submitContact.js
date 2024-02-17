const form = document.querySelector(".form-box");
const sendBtn = document.querySelector(".send");
const email = /@gmail.com/;
const info = [];

sendBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const dataArray = [...new FormData(form)];
  const empty =
    dataArray.findIndex(([_, value]) => value === "" || value === "Select") + 1;
  if (empty) window.alert("Your form has been submitted!");
  if (!empty) window.alert(`Enter ${dataArray[empty][0]}`);

  const data = Object.fromEntries(dataArray);
  info.push(data);

  form.reset();
});
