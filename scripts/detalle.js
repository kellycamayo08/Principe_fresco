import { deleteData } from "../helpers/deleteData.js";

const divContentCart = document.querySelector(".cart-box");
const total = document.querySelector(".total-price");
const detalle = document.querySelector(".detalle");
const bntEliminar = document.querySelector(".delete");
const addSsesionStorage = {};
document.addEventListener("DOMContentLoaded", () => {
  const producto = JSON.parse(sessionStorage.getItem("detalle"));
  const { id, image, image2, image3, price, title, description } = producto;

  detalle.innerHTML = `
    <section class="d-flex m-5">
    <div class="d-flex flex-column mx-5 ">
      <a href="#1"><img class="my-2" src="${image3}" width="80" height="120" alt=""></a>
      <a href="#2"><img class="my-2" src="${image2}" width="80" height="120" alt=""></a>
      <a href="#3"><img class="my-2" src="${image}" width="80" height="120" alt=""></a>
    </div>
    <div>
      <div>
        <img id="1" class="my-2" src="${image}" width="616" height="924" alt="">
      </div>
      <div>
        <img id="2" class="my-2" src="${image2}" width="616" height="924" alt="">
      </div>
      <div>
        <img id="3" class="my-2" src="${image3}" width="616" height="924" alt="">
      </div>

    </div>
    <div class="container2 mx-5">
      <h1 text-center>${title}</h1>
      <p class="pre">$ ${price}</p>
      <p class="si">Size</p>
      <section class="sect1 my-4 ">
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
        <button>XXL</button>
      </section>
      <section class="sect2 d-flex flex-column my-4">
        <button class="btnAdd">ADD TO CART</button>
        <button class="delete" id="${id}">DELETE</button>
      </section>

      <p class="parrafo">${description}</p>
      <p>Click for sizing</p>
    </div>
  </section>
    `;

  document.addEventListener("click", async ({ target }) => {
    if (target.classList.contains("btnAdd")) {
      sessionStorage.setItem("cart", JSON.stringify(producto));
      const cart = JSON.parse(sessionStorage.getItem("cart"));

      const { image, title, price, id } = cart;

      divContentCart.innerHTML += `<img src=${image} alt="product" class="card-img-top">
            <div class="detail-box">
              <div class="cart-product-title">${title} </div>
              <div class="cart-price">${price} </div>
              <input type="number" id=${id} value="1" class="cart-quantity">
            </div>
            <!-- <1-- Remove Cart -->
            <i class='bx bxs-trash-alt cart-remove'></i>
            
  `;
      total.innerHTML += `$${Number(price)}`;
    }
  });

  divContentCart.innerHTML += `<img src=${image} alt="product" class="card-img-top">
            <div class="detail-box">
              <div class="cart-product-title">${title} </div>
              <div class="cart-price">${price} </div>
              <input type="number" id=${id} value="1" class="cart-quantity">
            </div>
            <!-- <1-- Remove Cart -->
            <i class='bx bxs-trash-alt cart-remove'></i>
            
  `;
});

document.addEventListener("click", async ({ target }) => {
  if (target.classList.contains("delete")) {
    let id = target.id;

    let data = await deleteData("products", id);
  }
});
