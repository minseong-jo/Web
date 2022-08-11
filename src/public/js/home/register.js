const name = document.querySelector("#name");
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const registerBT = document.querySelector("#button");

registerBT.addEventListener("click", register);

function register () {
  if (!id.value) return alert("아이디를 입력해주세요.");
  if (pw !== confirmPw) {
    return alert("비밀번호가 일치하지 않습니다.");
  }
  const req = {
    name : name.value,
    id : id.value,
    pw : pw.value,
  };

  console.log(req);
  
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
  })
}
