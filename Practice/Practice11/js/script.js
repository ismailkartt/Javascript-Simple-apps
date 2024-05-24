

function hesapla() {
    let sayi=document.querySelector("#sayi").value
    let mesaj=document.querySelector("#mesaj")

    let islem=eval(sayi)

    mesaj.innerHTML=`Isleminizin sonucu: ${islem}`

}




