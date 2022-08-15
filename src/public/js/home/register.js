const name = document.querySelector("#name");
const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const confirmPw = document.querySelector("#confirm-pw");
const admin = document.querySelector("#admin");
const registerBT = document.querySelector("#button");

registerBT.addEventListener("click", register);

name.addEventListener("keydown",({ key }) => {
  keydown(key);
});
id.addEventListener("keydown",({ key }) => {
  keydown(key);
});
pw.addEventListener("keydown",({ key }) => {
  keydown(key);
});
confirmPw.addEventListener("keydown",({ key }) => {
  keydown(key);
});
admin.addEventListener("keydown",({ key }) => {
  keydown(key);
});

function InputDelete () {
  const obj = document.getElementsByClassName('text');

  for (var i = 0; i < obj.length; i++) {
    obj[i].value = '';
  }
}

function keydown (key) {
  if (key == "Enter") {
    register();
  } else {
    return;
  }
}

function register () {
  if (!id.value) return alert("아이디를 입력해주세요.");
  if (pw.value !== confirmPw.value) {
    return alert("비밀번호가 일치하지 않습니다.");
  }
  const req = {
    name : name.value,
    id : id.value,
    pw : pw.value,
    admin : admin.value,
  };
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      location.href = "/login";
      InputDelete();
    } else {
      alert (res.msg);
      InputDelete();
    }
  })
  .catch((err) => {
    console.error(new Error("회원가입 중 문제가 발생했습니다!"));
  });
}
