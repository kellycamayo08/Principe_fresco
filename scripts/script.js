import { getData } from "../helpers/getData.js";
import { verProductos } from "../modules/verProductos.js";

const container = document.querySelector(".container");
let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

document.addEventListener("DOMContentLoaded", async () => {
  const data = await getData("products");
  verProductos(data, container);
});

document.addEventListener("click", async ({ target }) => {
  const data = await getData("products");

  if (target.classList.contains("product")) {
    const producto = data.find(item => item.id == target.id);
    console.log(producto);
    sessionStorage.setItem("detalle", JSON.stringify(producto));
    window.location.href = "./pages/detalle.html";
  }
});

//open card
cartIcon.addEventListener("click", () => {
  console.log("clicked");
  cart.classList.add("active");
});
// Close cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};
