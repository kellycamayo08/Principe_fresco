import { getData } from "../helpers/getData.js";

export const addCart = (producto, divContentCart) => {
  const btnAdd = document.querySelector(".btnAdd");

  const { image, price, title } = producto;

  document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("click", async ({ target }) => {
      if (target.classList.contains("btnAdd")) {
        let data = await getData(products);
        producto = data.find(item => item.id == target.id);
        divContentCart.innerHTML;

        console.log(producto);
        sessionStorage.setItem("cart", JSON.stringify(producto));
      }
    });
  });
};
