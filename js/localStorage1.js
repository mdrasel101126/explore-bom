const clearLocalStorage = () => {
  localStorage.clear();
};

const addNameToLocalStorage = () => {
  const name = document.getElementById("input-name").value;
  localStorage.setItem("name", name);
};

const removeNameFromLS = () => {
  localStorage.removeItem("name");
};
const addAgeToLocalStorage = () => {
  const age = document.getElementById("input-age").value;
  localStorage.setItem("age", age);
};

const removeAgeFromLS = () => {
  localStorage.removeItem("age");
};
const displayCart = () => {
  const p = document.getElementById("cart-data");
  const name = localStorage.getItem("name");
  const age = localStorage.getItem("age");
  p.innerText = `Name :${name}  Age :${age}`;
};

const addFullNameToLocalStorage = () => {
  const firstName = document.getElementById("input-first-name").value;
  const lastName = document.getElementById("input-last-name").value;
  const fullName = {
    firstName: firstName,
    lastName: lastName,
  };
  localStorage.setItem("fullName", JSON.stringify(fullName));
};
const removeFullNameFromLS = () => {
  localStorage.removeItem("fullName");
};
displayCart();
