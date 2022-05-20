

const detalle = document.querySelector('.detalle');

document.addEventListener('DOMContentLoaded', () => {

    const producto = JSON.parse(sessionStorage.getItem('detalle'));
    const { image, price, title, description } = producto;

    detalle.innerHTML = `
    <section class="d-flex m-5">
    <div class="d-flex flex-column mx-5 ">
        <img src="../images/img1.png" width="80" height="120" alt="">
        <img src="../images/Rectangle 2.png" width="80" height="120" alt="">
        <img src="../images/Rectangle 3.png" width="80" height="120" alt="">
        <img src="../images/Rectangle 4.png" width="80" height="120" alt="">
    </div>
    <div>
        <div>
            <img src="${image}" alt="">
        </div>

    </div>
    <div class="container2 mx-5">
        <h1 >${title}</h1>
        <p class="pre">$ ${price}</p>
        <p class="si">Size</p>
        <section class="sect1 my-4 ">
            <button">S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
        </section>
        <section class="sect2 d-flex flex-column my-4">
        <button >ADD TO CART</button>
        <button>BUY IT NOW</button>
        </section>

        <p class="parrafo">${description}</p>
        </div>
</section>
    `
})