const getId = () => {
  const productName = document.getElementById("product-field").value;
  const productQuantity = document.getElementById("quantity-field").value;
  displayProducts(productName, productQuantity);
  saveToLocalStorage(productName, productQuantity);
};
const saveToLocalStorage = (productName, productQuantity) => {
  let cart = getFromLocalStorage();
  cart[productName] = productQuantity;
  localStorage.setItem("cart", JSON.stringify(cart));
};
const getFromLocalStorage = () => {
  const saveCart = localStorage.getItem("cart");
  let cart = {};
  if (saveCart) {
    cart = JSON.parse(saveCart);
  }
  return cart;
};

const displayProducts = (productName, productQuantity) => {
  const ul = document.getElementById("all-products");
  const li = document.createElement("li");
  li.innerText = `${productName}  ${productQuantity}`;
  ul.appendChild(li);
};

const loadFromLocalStorage = () => {
  const cart = getFromLocalStorage();
  for (const key in cart) {
    displayProducts(key, cart[key]);
  }
};

loadFromLocalStorage();
