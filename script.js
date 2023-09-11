const api = "https://shibe.online/api/shibes?count=10";
const btn = document.getElementById("Btn");
const div = document.querySelector("pic");
const img = document.getElementById("imagen");

function Showpic(){
fetch(api)
.then(response =>{
    if(!response.ok){
        throw new Error("Algo está mal");
    }
    return response.json();
})
.then(data => {
    const ShibaInu = data[0];
    img.src = ShibaInu;
})
.catch(Error =>{
    console.error();
})
}

btn.addEventListener("click", Showpic)