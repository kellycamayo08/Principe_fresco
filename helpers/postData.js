export const postData = async(endPoint, objeto) => {
    
  try {
      
    let res = await fetch (`https://principe-fresk.herokuapp.com/${endPoint}`, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-type": "application/json; charset=utf-8"
        }
    })

    let data = await res.json();
    console.log(data)
    alert("Datos guardados")
    window.location.href = "../index.html"
  } catch (error) {
      console.log("Hubo un error", error)
  }


}