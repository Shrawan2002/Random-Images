let url="https://api.thecatapi.com/v1/images/search?limit=10";


let btn= document.querySelector("button");

btn.addEventListener("click", async function(){
    let pra = document.querySelector("#fact");
    let fact= await getFact();
    console.log(fact);
    pra.innerText=fact;

})

async function getFact(){
    let response=await axios.get(url);
    return response;
}