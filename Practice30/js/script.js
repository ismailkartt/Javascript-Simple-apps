let sayac = document.querySelector(".sayac");
let gun = document.querySelector("#gun");
let saat = document.querySelector("#saat");
let dakika = document.querySelector("#dakika");
let saniye = document.querySelector("#saniye");

let birthday = "20 july 2024";

const geriSayim = () => {
  let newBirthday = new Date(birthday);
  console.log(newBirthday);

  let today = new Date();
  console.log(today);

  let totalSeconds = Math.floor((newBirthday - today) / 1000);
  console.log(totalSeconds);

  let day = Math.floor(totalSeconds / 3600 / 24);
  console.log(day);

let hour = Math.floor(totalSeconds/3600)%24;
console.log(hour)

let minute = Math.floor(totalSeconds/60)%60;
console.log(minute)

let second = Math.floor(totalSeconds%60)
console.log(second)

gun.innerHTML = formatTime(day);
saat.innerHTML = formatTime(hour);
dakika.innerHTML = formatTime(minute);
saniye.innerHTML = formatTime(second);

};



setInterval(function () {

    geriSayim();

    if(sayac.style.background=="antiquewhite"){
        sayac.style.background="wheat";
    }else{
        sayac.style.background="antiquewhite"; 
    }

   
}, 1000);


const formatTime = (time) => { 
    return time == 0 ? "00" : time < 10 ? `0${time}` : time;
 }

 

