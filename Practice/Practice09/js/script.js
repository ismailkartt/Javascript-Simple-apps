
const harfNotu = document.getElementById("message");

function hesapla() {
  const vize = document.getElementById("vize").value;
  const final = document.getElementById("final").value;
  
  harfNotu.classList.remove("d-none");
  harfNotu.classList.add("d-block");
  const ortalama = parseFloat((vize * 0.4 + final * 0.6).toFixed(2));
  switch (true) {
    case ortalama >= 90 && ortalama <= 100:
      harfNotu.innerHTML = `Ortalamanız:${ortalama} Harf notunuz: AA`;
      break;
    case ortalama >= 80 && ortalama < 90:
      harfNotu.innerHTML = `Ortalamanız:${ortalama} Harf notunuz: BA`;
      break;
    case ortalama >= 70 && ortalama < 80:
      harfNotu.innerHTML = `Ortalamanız:${ortalama} Harf notunuz: BB`;
      break;
    case ortalama >= 60 && ortalama < 70:
      harfNotu.innerHTML = `Ortalamanız:${ortalama} Harf notunuz: CB`;
      break;
    case ortalama >= 50 && ortalama < 60:
      harfNotu.innerHTML = `Ortalamanız:${ortalama} Harf notunuz: CC`;
      break;
    case ortalama >= 0 && ortalama < 50:
      harfNotu.innerHTML = `Ortalamanız:${ortalama} Harf notunuz: FF`;
      break;
    default:
      harfNotu.innerHTML = "Geçerli bir not giriniz";    
  }
}

function temizle(){
    
    harfNotu.classList.add("d-none");
     
}
