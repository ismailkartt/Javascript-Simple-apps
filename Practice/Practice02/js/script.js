const menuItems = [
  { text: "SIYAH",renk: "kırmızı" },
  { text: "KIRMIZI",renk: "beyaz" },
  { text: "MAVI",renk: "mavi" },
  { text: "SIYAH",renk: "siyah" },
  { text: "BEYAZ",renk: "yesil" },
];

const wrongColors = (menuItems) => {
  const wrongColors = document.querySelector(".wrongColors");

  const ul = document.createElement("ul");
 
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item.text;
    li.classList.add(item.renk);
    ul.appendChild(li);
    
  });
  ul.classList.add("colors");
  wrongColors.appendChild(ul);
};

window.onload = function () {
  wrongColors(menuItems);
};
