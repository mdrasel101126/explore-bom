const numberString = prompt("Enter a Number:");
const number = parseInt(numberString);
if (isNaN(number)) {
  alert("Please insert a number");
} else {
  alert(`the sum is : ${number + 250}`);
}
