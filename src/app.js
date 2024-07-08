/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const suitsArray = ["♦", "♥", "♠", "♣"];
const NumberArray = [
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
//function to change and display a random card
const changeCard = () => {
  //generate random indexs for suits and number
  const randomSuitIndex = Math.floor(Math.random() * suitsArray.length);
  const randomCardNumberIndex = Math.floor(Math.random() * NumberArray.length);

  //retrieve suit and number using the random index
  const randomSuit = suitsArray[randomSuitIndex];
  const randomNumber = NumberArray[randomCardNumberIndex];

  //update the html content of card element
  const topSuitDiv = document.querySelector(".top-suit");
  const bottomSuitDiv = document.querySelector(".bottom-suit");
  const numberDiv = document.querySelector(".number");

  bottomSuitDiv.innerHTML = randomSuit;
  topSuitDiv.innerHTML = randomSuit;
  numberDiv.innerHTML = randomNumber;

  //adjust text color based on the selected suit
  if (randomSuit === "♥" || randomSuit === "♦") {
    topSuitDiv.style.color = "red";
    bottomSuitDiv.style.color = "red";
    numberDiv.style.color = "red";
  }
  if (randomSuit === "♣" || randomSuit === "♠") {
    topSuitDiv.style.color = "black";
    bottomSuitDiv.style.color = "black";
    numberDiv.style.color = "black";
  }
};
const button = document.querySelector(".btn");
button.addEventListener("click", changeCard);
window.onload = function() {
  changeCard();
};
//   const changeCard=()=> {
//   let suits = ["♦", "♥", "♠", "♣"];
//   let randomvalue = Math.floor(Math.random() * value.length);
//   let randomsuit = Math.floor(Math.random() * suits.length);
//   if (randomsuit === "♥" || randomsuit === "♦") {
//     document.querySelector(".top").style.color = "red";
//     document.querySelector(".bottom").style.color = "red";
//   } else {
//     document.querySelector(".top").style.color = "black";
//     document.querySelector(".bottom").style.color = "black";
//   }
//   document.querySelector(".top").innerHTML = randomsuit;
//   document.querySelector(".number").innerHTML = randomvalue;
//   document.querySelector(".bottom").innerHTML = randomsuit;
// };
// }
// const button = document.querySelector(".btn");
// button.addEventListener("click", changeCard);
// window.onload=function(){
//   changeCard();
// };
