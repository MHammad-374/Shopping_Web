export const apidata = async (endpoint) => {
    console.log("Loading" , endpoint)
    let data = await fetch('https://fakestoreapi.com/' + endpoint)
    let res = await data.json();
    // console.log(res)

    return res;
}
