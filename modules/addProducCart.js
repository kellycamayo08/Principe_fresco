export const addCart = (buttonAdd, divContentCart) => {
  const buttonAdd = document.querySelector(".addToCart").content;
  const divContentCart = document.querySelector(".cart-content");
  const producto = JSON.parse(sessionStorage.getItem("detalle"));
  const { image, price, title } = producto;
  let carrito = {};

  buttonAdd.addEventListener("click", e => {
    e.preventDefault();
    show();
  });

  const show = () => {
    let ShowItem = {
      image,
      price,
      title,
    };
    console.log(ShowItem);
  };
  buttonAdd.addEventListener("click", () => {
    divContentCart.innerHTML;
    `<img src=${image} alt="product" class="card-img-top">
            <div class="detail-box">
              <div class="cart-product-title">${title} </div>
              <div class="cart-price">${price} </div>
              <input type="number" value="1" class="cart-quantity">
            </div>
            <!-- <1-- Remove Cart -->
            <i class='bx bxs-trash-alt cart-remove'></i>
  `;
  });
};
