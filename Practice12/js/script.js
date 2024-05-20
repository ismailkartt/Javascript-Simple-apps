
function hesapla(){

    const yas = document.getElementById("yas").value;
    const fiyat = document.getElementById("fiyat").value;
    const mesaj = document.querySelector(".mesaj");

    let indirimliFiyat;

    if(!yas || !fiyat){ 
        mesaj.innerHTML = `Eksik bilgi girdiniz`;
    }else if(yas>65){
        indirimliFiyat = Number(fiyat*0.5);
        mesaj.innerHTML = `İndirimli fiyatınız: ${indirimliFiyat}`; 
    }else{
        indirimliFiyat = Number(fiyat*0.9);
        mesaj.innerHTML = `İndirimli fiyatınız: ${indirimliFiyat}`; 
    }


}
