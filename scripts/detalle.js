import { deleteData } from "../helpers/deleteData.js";

const detalle = document.querySelector(".detalle");
const bntEliminar = document.querySelector(".delete");

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
});

document.addEventListener("click", async ({ target }) => {
  if (target.classList.contains("delete")) {
    let id = target.id;

    let data = await deleteData("products", id);
  }
});
