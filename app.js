let url ="https://api.thecatapi.com/v1/images/search";
let btn= document.querySelector("button");
btn.addEventListener("click", async ()=>{
    let link= await getImg();
    let img=document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
})


async function getImg() {
    let res= await axios.get(url);
    console.log(res.data[0].url);
    return res.data[0].url;
    
}
