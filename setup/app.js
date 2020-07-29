"use strict";

const colors = [
  {
    name: "Red",
    hex: "#ff0000",
  },
  {
    name: "Orange",
    hex: "#ffa500",
  },
  {
    name: "Lemon Chiffon",
    hex: "#fffacd",
  },
];
const colorRandomizer = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
const colorSelector = () => {
  const randomColor = colorRandomizer();
  document.body.style.backgroundColor = randomColor.hex;

  document.getElementById(
    "color-indicator"
  ).innerHTML = `${randomColor.name} ${randomColor.hex}`;
};

const buttonClick = () => {
  document
    .getElementById("simpleButton")
    .addEventListener("click", colorSelector);
};

const init = () => {
  buttonClick();
};

init();
