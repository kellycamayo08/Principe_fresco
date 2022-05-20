import { getData } from '../helpers/getData.js'
import { verProductos } from '../modules/verProductos.js';

const container = document.querySelector('.container');

document.addEventListener('DOMContentLoaded', async () => {
    const data = await getData('products');
    verProductos(data, container)
})