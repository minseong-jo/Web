const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const loginBT = document.querySelector("button");

loginBT.addEventListener("click", login);

function login () {
  const req = {
    id : id.value,
    pw : pw.value,
  };

  console.log(JSON.stringify(req));
  
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }
    body: JSON.stringify(req)
  })
}
