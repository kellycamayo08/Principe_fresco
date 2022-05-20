export const deleteData = (endPoint, id) => {
    fetch(`https://principe-fresk.herokuapp.com/${endPoint}/${id}`,{
        method:'DELETE',
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(()=> alert('elemento Eliminado'))
}