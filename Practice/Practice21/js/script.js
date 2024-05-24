let img = document.getElementById("lamp");


document.getElementById("on").addEventListener("click",()=>{

  img.src = "img/police-bmw.gif";

})



document.getElementById("off").addEventListener("click",()=>{

  img.src = "img/police-bmw-off.png";

})


img.addEventListener('mouseover', function() {
    img.src = 'img/police-bmw.gif'; 
});


img.addEventListener('mouseout', function() {
  img.src = 'img/police-bmw-off.png'; 
});
