let body = document.querySelector("body");
let colorName = document.querySelector("#color");
let buttonEl = document.querySelector("#btn");

const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "burlyywood",
  "purple",
  "cyan",
  "blueviolet",
  "darkgoldenrod",
  "royalblue",
  "hotpink",
  "firebrick",
  "chocolate",
  "indigo",
  "tomato",
  "sandybrown",
];

let index;

const changeColor = () => {
  index = Math.floor(Math.random() * colors.length);

  body.style.backgroundColor = colors[index];
  colorName.innerHTML = colors[index];
  buttonEl.innerHTML = colors[index];
};

buttonEl.addEventListener("click", () => {
  changeColor();
});
