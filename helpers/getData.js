export const getData = async (endPoint) => {

    const res = await fetch(`https://principe-fresk.herokuapp.com/${endPoint}`);
    const data = await res.json();
    return data;
}