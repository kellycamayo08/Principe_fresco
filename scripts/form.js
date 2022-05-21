import { postData } from "../helpers/postData.js";

const form = document.getElementById("form")



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
      image : imagen,
      image2: imagen,
      image3 : imagen
  
    }
     await postData('products',save);
    
     
  })