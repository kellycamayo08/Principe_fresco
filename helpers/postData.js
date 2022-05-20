export const postData = (endPoint, objeto) => {
    fetch(`https://principe-fresk.herokuapp.com/${endPoint}`, {
        method: 'POST',
        body: JSON.stringify(objeto),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(res = res.JSON())
        .then(() => alert('producto agregado correctamente'));


}