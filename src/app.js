/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const generalerandomcard =() => {
  let value = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let suits=["♦", "♥", "♠", "♣"];
  let randomvalue = value[Math.floor(Math.random()* values.length)];
  let randomsuit = suits[Math.floor(Math.random() * suits.length)]
  if (randomsuit === "♥" || randomsuit === "♦") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".bottom").style.color= "red";
  }else{
    document.querySelector(".top").style.color = "black";
    document.querySelector(".bottom").style.color ="black";
  }
    document.querySelector(".top").innerHTML = randomsuit;
    document.querySelector(".number").innerHTML = randomvalue;
    document.querySelector(".bottom").innerHTML = randomsuit;
};
window.onload = function() {
  document.querySelector(".btn").addEventListener("click", function)
  generateRandomCard();
};
