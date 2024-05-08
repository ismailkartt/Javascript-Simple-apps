const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const ilkSayi = document.querySelector(".ilkSayi").value;
  const ikinciSayi = document.querySelector(".ikinciSayi").value;
  const sonuc = document.querySelector(".sonuc");

  let carpim = 1;
  for (let i = 1; i <= ikinciSayi; i++) {
    carpim = ilkSayi * carpim;
    console.log(carpim)
    
  }
  sonuc.innerHTML = `${ilkSayi} = ${carpim}`;
});
