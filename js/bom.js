const showAlert = () => {
  alert("Be alert all time!!");
};

const showConfirm = () => {
  const value = confirm("Do you confirm ?");
  console.log(value);
};

const showPromt = () => {
  const value = prompt("My Name is: ");
  if (!!value) {
    console.log(value);
  } else {
    console.log("not valid");
  }
};
