// this is our database
const products = [
  { id: 1, name: "Shoes", price: 10 },
  { id: 2, name: "Jeans", price: 20 },
  { id: 3, name: "Shirt", price: 25 },
  { id: 4, name: "Jacket", price: 30 },
];
let cart = [];
const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const emptyCart = document.getElementById("empty-cart");
const cartTotal = document.getElementById("cart-total");
const totalPrice = document.getElementById("total-price");
products.forEach((product) => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
  <span>${product.name}-$${product.price} </span>
  <button onclick="addToCart(${product.id})">Add to Cart</button>
  `;
  productList.appendChild(div);
});
function addToCart(id) {
  const product = products.find((item) => item.id === id);
  cart.push(product);
  updateCart();
}
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  if (cart.length === 0) {
    emptyCart.classList.remove("hidden");
    cartTotal.classList.add("hidden");
  } else {
    emptyCart.classList.add("hidden");
    cartTotal.classList.remove("hidden");
    cart.forEach((item) => {
      const div = document.createElement("div");
      div.innerText = `${item.name} - $${item.price}`;
      cartItems.appendChild(div);
      total += item.price;
    });
    totalPrice.innerText = `$${total}`;
    document.getElementById("checkout-btn").addEventListener("click", () => {
      alert("Checkout Successfull");
      cart = [];
      updateCart();
    });
  }
}
