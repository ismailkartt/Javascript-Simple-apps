function yazdir() {
  const isim = document.getElementById("isim").value;
  const meslek = document.getElementById("meslek").value;
  const sonuc = document.querySelector(".sonuc"); 
  if(isim && meslek){
    sonuc.innerHTML = `SAYIN ${meslek} ${isim} HOŞGELDİNİZ`;
  }else if(!isim || !meslek){
    sonuc.innerHTML = `LUTFEN FORUMU EKSIKSIZ DOLDURUNUZ`;
  }

}

function sil() {
  document.getElementById("isim").value = "";
  document.getElementById("meslek").value = "";
  const sonuc = document.querySelector(".sonuc"); 
  sonuc.innerHTML = "";
}
