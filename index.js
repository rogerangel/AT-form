const mainForm = document.getElementById("dataForm");
const act = document.getElementById("act");
const fullName = document.getElementById("fullname");
const platform = document.getElementById("platform");
const altPlatform = document.getElementById("otherPlatform");
const actHldr = document.getElementById("act-hldr");
const amount = document.getElementById("amount");
const notes = document.getElementById("notes");
const user = document.getElementById("user");
const submit = document.getElementById("submit");
const url =
  "https://script.google.com/macros/s/AKfycbw3sMWQOJ5DMNYIH0dAmKeL1NYAEYVt2i9Y-LfpppQk5luTO-oLDUGNLmrLMr-OaBteqg/exec";

function initForm(e) {
  e.preventDefault();
  var record = {
    acc: act.value,
    fullName: fullName.value,
    platform: platform.value,
    altPlatform: altPlatform.value,
    takenByComp: actHldr.value,
    amount: amount.value,
    notes: notes.value,
    takenBy: user.value,
  };

  const dataJson = JSON.stringify(record);

  fetch(url, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    body: dataJson,
  });
  alert("Record Submitted!");
  document.getElementById("dataForm").reset();

  //   .then((res) => res.json())
  //   .then((json) => {
  //     console.log(json);
  //   });
}

function goToTable() {
  location.href = "table.html?status=success";
}

mainForm.addEventListener("submit", initForm);
document.getElementById("data-table").addEventListener("click", goToTable);
