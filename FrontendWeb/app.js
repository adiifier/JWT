const btn = document.querySelector("#subt");
const userInput = document.querySelector("#user");
const passInput = document.querySelector("#pass");
const mssg = document.querySelector("#show");

async function onClick() {
  const username = userInput.value;
  const password = passInput.value;
  const response = await fetch("http://localhost:4000/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      day: "wednesday",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const result = await response.json();
  const sts = response.status;
  const msg = result.message;

  if (sts == 200) {
    mssg.innerHTML = "User Signed Succesfully";
    mssg.style.display = "block";
  } else {
    mssg.innerHTML = msg;
    mssg.style.display = "block";
  }
}

btn.addEventListener("click", onClick);
mssg.style.display = "none";
