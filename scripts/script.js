import { deleteData } from "../helpers/deleteData.js";
import { getData } from "../helpers/getData.js";
import { postData } from "../helpers/postData.js";
import { verProductos } from "../modules/verProductos.js";

const bntEliminar = document.getElementById("delete")
const form = document.getElementById("form")
const container = document.querySelector(".container");
let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector(".close-cart");

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
closeCart.addEventListener("click", () => {
  console.log("clicked");
  cart.classList.remove("active");
});

form.addEventListener('submit', async(e) =>{
  e.preventDefault();
  let titulo = document.querySelector('#title').value;
  let precio = document.querySelector('#price').value;
  let descripcion = document.querySelector('#description').value;
  let imagen = document.querySelector('#image').value;

  let save = {
    title : titulo,
    price : precio,
    description : descripcion,
    image : imagen

  }
    await postData("products", save);
    alert("Guardado Correctamente")
    window.location.href = "../index";
})

bntEliminar.addEventListener("click", (e) =>{
  e.preventDefault();

    let id = e.target.id;
  console.log(id)
  let url =` https://principe-fresk.herokuapp.com/products/${id} `
   deleteData(url)

})

closeCart.addEventListener("click", () => {
  console.log("clicked");
  cart.classList.remove("active");
});
