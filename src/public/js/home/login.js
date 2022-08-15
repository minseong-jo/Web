const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBT = document.querySelector("#button");
const input = document.querySelector("input");

loginBT.addEventListener("click", login);

id.addEventListener("keydown",({ key }) => {
  keydown(key);
});

pw.addEventListener("keydown",({ key }) => {
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
    login();
  } else {
    return;
  }
}

function login () {
  const req = {
    id : id.value,
    pw : pw.value,
  };
  
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
  .then((res) => res.json())
  .then((res) => {
    if (res.success) {
      location.href = "/";
      InputDelete();
    } else {
      alert (res.msg);
      InputDelete();
    }
  })
  .catch((err) => {
    console.error(new Error("로그인 중 문제가 발생했습니다!"));
  })
}
