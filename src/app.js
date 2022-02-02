/* eslint-disable */
//import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#theExcuse").innerHTML = generateExcuse();
  });
};
let generateExcuse = () => {
  let randomIndexs = [];
  for (let i = 0; i < 4; i++) {
    randomIndexs.push(Math.ceil(Math.random() * 10) % 4);
  }
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let excuseParts = [who, action, what, when];
  let excuse = "";
  for (var i = 0; i < 4; i++) {
    excuse += excuseParts[i][randomIndexs[i]] + " ";
  }
  return excuse;
};
