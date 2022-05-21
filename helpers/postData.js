export const postData = async(endPoint, objeto) => {
    fetch(`https://principe-fresk.herokuapp.com/${endPoint}`, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res = await res.JSON())
    console.log(res)
        .then(() => alert('producto agregado correctamente'));


}