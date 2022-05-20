export const verProductos = (data, cont) => {
    cont.innerHTML = "";

    data.forEach(({ image, title, description }) => {
        cont.innerHTML += `
        <div class="card m-5" style="width: 18rem;">
            <img src="${image}" alt="...">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
            </div>
        </div>
        `
    });
}