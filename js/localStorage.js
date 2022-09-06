document.getElementById("btn-add-name").addEventListener("click", function () {
  const nameField = document.getElementById("input-name-field").value;
  localStorage.setItem("name", nameField);
});
document.getElementById("btn-add-age").addEventListener("click", function () {
  const ageField = document.getElementById("input-age-field").value;
  localStorage.setItem("age", ageField);
});
document
  .getElementById("btn-clear-storage")
  .addEventListener("click", function () {
    localStorage.clear();
  });
document
  .getElementById("btn-remove-name")
  .addEventListener("click", function () {
    localStorage.removeItem("name");
  });
document
  .getElementById("btn-remove-age")
  .addEventListener("click", function () {
    localStorage.removeItem("age");
  });
