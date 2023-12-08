function start() {
  var randNo1 = Math.floor(Math.random() * 6) + 1;
  var randNo2 = Math.floor(Math.random() * 6) + 1;
  var randNo3 = Math.floor(Math.random() * 6) + 1;
  var randNo4 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage1 = "dice" + randNo1 + ".png";
  var randomDiceImage2 = "dice" + randNo2 + ".png";
  var randomDiceImage3 = "dice" + randNo3 + ".png";
  var randomDiceImage4 = "dice" + randNo4 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
  document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
  document.querySelectorAll("img")[2].setAttribute("src", randomDiceImage3);
  document.querySelectorAll("img")[3].setAttribute("src", randomDiceImage4);
  var message;
  if (randNo1 + randNo2 > randNo3 + randNo4) {
    message = "Player 1 Wins 🎊";
  } else if (randNo1 + randNo2 < randNo3 + randNo4) {
    message = "Player 2 Wins 🎊";
  } else {
    message = "Draw !!";
  }
  document.querySelector("h1").innerHTML = message;
}
