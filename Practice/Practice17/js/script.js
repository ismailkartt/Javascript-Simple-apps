document.getElementById("btn").addEventListener("click",()=>{

    let background = document.getElementById("bg");
    

    const renkler = ["red","black","blue","wheat"];

    const randomIndex = Math.floor(Math.random() * renkler.length);
    
    const selectedColor = renkler[randomIndex];

    
    if(background.classList.length==0){
        background.classList.add(selectedColor);
    }else{
        background.className = "";
    }
    
    background.classList.add(selectedColor);

    console.log(background)
   
    
    
    


})