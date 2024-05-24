function hesapla(){
    const yas = document.getElementById("yas").value;
    const msg = document.getElementById("msg");
    const erkek = document.getElementById("erkek");
    const bayan = document.getElementById("bayan");
    
    if(erkek.checked && yas>19){
        msg.innerHTML = `Askere gidebilirsiniz`;
    }else{
        msg.innerHTML = `Askere gidemezsiniz`;
    }
}


function temizle(){
    const msg = document.getElementById("msg");
    document.getElementById("erkek").checked = true;
    document.getElementById("bayan").checked = false;
    msg.innerHTML = ``;
    document.getElementById("yas").value = "";
}





