var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var value1 = "./images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var value2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", value1);
document.querySelector(".img2").setAttribute("src", value2);

var result = "";

if (randomNumber1 > randomNumber2) {
  result = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  result = "Player 2 Wins! 🚩";
} else {
  result = "Draw!";
}

document.querySelector("h1").innerHTML = result;
