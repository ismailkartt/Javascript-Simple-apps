let sayi1El = document.getElementById("sayi1");
let sayi2El = document.getElementById("sayi2");
const msg = document.getElementById("msg");

document.getElementById("btn").addEventListener("click", () => {

  let sayi1 = Number(sayi1El.value);
  let sayi2 = Number(sayi2El.value);


  if (sayi1 == sayi2 || sayi1 + 1 == sayi2) {
    msg.innerHTML = `Aralarında en az iki fark olan sayi giriniz`;
  }

  

  if (sayi1 > sayi2) {
    let temp = sayi1;
    sayi1 = sayi2;
    sayi2 = temp;
  }

  let counter = 0;
  let total = 0;

  for (let i = sayi1 + 1; i < sayi2; i++) {
    if (i % 4 == 0 && i % 8 != 0) {
      total += i;
      counter++;
    }
  }

  msg.innerHTML = `Sayıların toplamı: ${total} Sayıların adedi: ${counter}`;
});
