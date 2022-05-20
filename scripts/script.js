const { getData } = require("../helpers/getData.js")



document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData('products');
    console.log(data);
})