const clearLocalStorage = () => {
  localStorage.clear();
};
const increaseCount = () => {
  const countString = document.getElementById("count");
  const count = parseInt(countString.innerText) + 1;
  countString.innerText = count;
  localStorage.setItem("count", count);
};

const getLocalStorage = () => {
  let count = localStorage.getItem("count");
  console.log(count);
  if (count === null) {
    count = 0;
  }
  console.log(typeof count);
  const countString = document.getElementById("count");
  countString.innerText = count;
};
getLocalStorage();
