export const deleteData =async(endPoint, id) => {
  try {
         await fetch (`https://principe-fresk.herokuapp.com/${endPoint}/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=utf-8"
            }
        })

        alert('informacion eliminada')
        window.location.href = "../index.html"
  } catch (error) {
      console.log("hubo un error", error)
  }
}