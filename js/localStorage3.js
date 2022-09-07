document.getElementById("btn-send-name").addEventListener("click", function () {
  const name = document.getElementById("input-name").value;
  localStorage.setItem("name", name);
});
document
  .getElementById("btn-delete-name")
  .addEventListener("click", function () {
    localStorage.removeItem("name");
  });
document
  .getElementById("btn-send-email")
  .addEventListener("click", function () {
    const email = document.getElementById("input-email").value;
    localStorage.setItem("email", email);
  });
document
  .getElementById("btn-delete-email")
  .addEventListener("click", function () {
    localStorage.removeItem("email");
  });
document
  .getElementById("btn-send-message")
  .addEventListener("click", function () {
    const message = document.getElementById("input-message").value;
    localStorage.setItem("message", message);
  });
document
  .getElementById("btn-delete-email")
  .addEventListener("click", function () {
    localStorage.removeItem("message");
  });
document.getElementById("btn-reset").addEventListener("click", function () {
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("message");
});

document.getElementById("btn-send").addEventListener("click", function () {
  const name = document.getElementById("input-name").value;
  const email = document.getElementById("input-email").value;
  const message = document.getElementById("input-message").value;
  const person = {
    name: name,
    email: email,
    message: message,
  };
  localStorage.setItem("person", JSON.stringify(person));
  displayPerson();
});

const displayPerson = () => {
  const person = JSON.parse(localStorage.getItem("person"));
  const personField = document.getElementById("display-person");
  personField.innerHTML = "";
  for (const key in person) {
    const p = document.createElement("p");
    p.innerText = `${key} : ${person[key]}`;
    personField.appendChild(p);
  }
};
displayPerson();
