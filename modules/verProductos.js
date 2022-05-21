export const verProductos = (data, cont) => {
  cont.innerHTML = "";

  data.forEach(({ image, title, price, id }) => {
    cont.innerHTML += `
        <div class="card m-5 product" style="width: 18rem;">
            <img id="${id}" class="product" src="${image}" alt="...">
            <div id="${id}" class="card-body product">
                <h5 id="${id}" class="card-title product">${title}</h5>
                <p class="card-text mt-4"> Precio: <strong>${price}</strong></p>
            </div>
        </div>
        `;
  });
};
