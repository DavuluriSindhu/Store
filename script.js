const products = [
  { name: "Minimal White Dress", price: 1099, img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab" },
  { name: "Relaxed Denim Jacket", price: 1899, img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d" },
  { name: "Cotton Summer Tee", price: 699, img: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c" }
];

function renderProducts() {
  const list = document.getElementById("productGrid");
  if (!list) return;
  list.innerHTML = "";
  products.forEach((p, i) => {
    list.innerHTML += `
      <div class="product-card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button class="btn-premium" onclick="addToCart(${i})">Add to Cart</button>
      </div>
    `;
  });
}
renderProducts();

let cart = JSON.parse(localStorage.getItem("cart") || "[]");

function addToCart(i) {
  cart.push(products[i]);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

if (document.getElementById("cartItems")) {
  const container = document.getElementById("cartItems");
  cart.forEach(item => {
    container.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}">
        <div>
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
        </div>
      </div>
    `;
  });
}

function completePurchase() {
  alert("Thank you for your purchase!");
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2000);
}
