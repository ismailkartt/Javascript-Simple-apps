let img= document.getElementById("lamp");


document.getElementById("on").addEventListener("click",()=>{

  img .src="img/police-bmw.gif"

})

document.getElementById("off").addEventListener("click",()=>{

   img.src="img/police-bmw-off.png"

})

img.addEventListener("mouseover",()=>{
    img.src="img/police-bmw.gif"
    img.style.cursor="pointer";
})
img.addEventListener("mouseleave",()=>{
    img.src="img/police-bmw-off.png"
 
})