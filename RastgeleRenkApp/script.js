
const button = document.getElementById("generate-color-btn");

const colors = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta"];


button.addEventListener("click",()=>{
    let rastgeleSayi = 0;
    
        rastgeleSayi = Math.floor(Math.random()*colors.length);
        console.log(rastgeleSayi);
        document.body.style.backgroundColor = colors[rastgeleSayi];
    
})
