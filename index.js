const mainForm = document.getElementById("dataForm");
const submit = document.getElementById("submit");
const url =
  "https://script.google.com/macros/s/AKfycbw3sMWQOJ5DMNYIH0dAmKeL1NYAEYVt2i9Y-LfpppQk5luTO-oLDUGNLmrLMr-OaBteqg/exec";

const formJson = () => {
  return JSON.stringify({
    acc: document.getElementById("act").value,
    fullName: document.getElementById("fullname").value,
    platform: document.getElementById("platform").value,
    altPlatform: document.getElementById("otherPlatform").value,
    takenByComp: document.getElementById("act-hldr").value,
    amount: document.getElementById("amount").value,
    notes: document.getElementById("notes").value,
    takenBy: document.getElementById("user").value,
  });
};

function initForm(e) {
  e.preventDefault();

  // fetch(url, {
  //   method: "POST",
  //   mode: "no-cors",
  //   cache: "no-cache",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   redirect: "follow",
  //   body: formJson(),
  // });
  console.log(mainForm);
  alert("Record Submitted!");
  mainForm.reset();
}

mainForm.addEventListener("submit", initForm);
