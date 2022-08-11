const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const name = document.querySelector("#name");
const registerBT = document.querySelector("#button");

registerBT.addEventListener("click", register);

function register () {
  const req = {
    id : id.value,
    pw : pw.value,
    comfirmPw : confirmPw.value,
    name : name.value,
  };
  
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      location.href = "/login";
    } else {
      alert (res.msg);
    }
  })
  .catch((err) => {
    console.error(new Error("회원가입 중 문제가 발생했습니다!"));
  });
}
