let inputs = document.getElementsByTagName("input");
let wrapDivRadios = document.querySelector(".wrapDivRadios");
let resultPoints = document.querySelector("#resultPoints");
let mainSec = document.querySelector("#mainSec");
let headerSec = document.querySelector("#headerSec");
let playHead = document.querySelector("#playHead");
let endHead = document.querySelector("#endHead");
let user = document.querySelector(".user");
let comp = document.querySelector(".comp");
let compText = "";
let count = 1;
let rounds = 5;
let userPoints = 0;
let compPoints = 0;
let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let radioChange = () => {
  for (let j = 0; j < inputs.length; j++) {
    if (inputs[j].checked) {
      rounds = Number(inputs[j].value);
    }
  }
};
let startGame = (userChoice) => {
  // maximal rundenzahl
  if (count > rounds) {
    return null;
  }
  wrapDivRadios.innerHTML = `${count} / ${rounds}`;
  let compNum = Math.floor(Math.random() * 3);

  switch (compNum) {
    case 0:
      compText = "paper";
      break;
    case 1:
      compText = "rock";
      break;
    case 2:
      compText = "scissors";
      break;
  }

  let resultBoth = userChoice + compText;
  switch (resultBoth) {
    case "paperrock":
      userPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${userChoice} beats ${compText}`;
      mainSec.classList.add("winner");
      mainSec.classList.remove("loser");
      user.style.color = "rgba(24, 232, 72, 0.5)";
      comp.style.color = "rgba(232, 24, 24, 0.5)";

      break;
    case "rockpaper":
      compPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${compText} beats ${userChoice}`;
      mainSec.classList.remove("winner");
      mainSec.classList.add("loser");
      user.style.color = "rgba(232, 24, 24, 0.5)";
      comp.style.color = "rgba(24, 232, 72, 0.5)";
      break;
    case "paperscissors":
      compPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${compText} beats ${userChoice}`;
      mainSec.classList.remove("winner");
      mainSec.classList.add("loser");
      user.style.color = "rgba(232, 24, 24, 0.5)";
      comp.style.color = "rgba(24, 232, 72, 0.5)";
      break;
    case "scissorspaper":
      userPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${userChoice} beats ${compText}`;
      mainSec.classList.add("winner");
      mainSec.classList.remove("loser");
      user.style.color = "rgba(24, 232, 72, 0.5)";
      comp.style.color = "rgba(232, 24, 24, 0.5)";
      break;
    case "scissorsrock":
      compPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${compText} beats ${userChoice}`;
      mainSec.classList.remove("winner");
      mainSec.classList.add("loser");
      user.style.color = "rgba(232, 24, 24, 0.5)";
      comp.style.color = "rgba(24, 232, 72, 0.5)";
      break;
    case "rockscissors":
      userPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${userChoice} beats ${compText}`;
      mainSec.classList.add("winner");
      mainSec.classList.remove("loser");
      user.style.color = "rgba(24, 232, 72, 0.5)";
      comp.style.color = "rgba(232, 24, 24, 0.5)";
      break;
    default:
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${userChoice} vs ${compText} : tie`;
      mainSec.classList.remove("winner");
      mainSec.classList.remove("loser");
      user.style.color = "rgb(113, 113, 113)";
      comp.style.color = "rgb(113, 113, 113)";
  }

  if (count >= rounds) {
    if (userPoints < compPoints) {
      endHead.innerHTML = `Defeat`;
      mainSec.classList.remove("winner");
      mainSec.classList.add("loser");
      user.style.color = "rgba(232, 24, 24, 0.5)";
      comp.style.color = "rgba(24, 232, 72, 0.5)";
    } else if (userPoints > compPoints) {
      endHead.innerHTML = `Winner`;
      mainSec.classList.add("winner");
      mainSec.classList.remove("loser");
      user.style.color = "rgba(24, 232, 72, 0.5)";
      comp.style.color = "rgba(232, 24, 24, 0.5)";
    } else if (userPoints == compPoints) {
      endHead.innerHTML = `Tie`;
      mainSec.classList.remove("winner");
      mainSec.classList.remove("loser");
      user.style.color = "rgb(113, 113, 113)";
      comp.style.color = "rgb(113, 113, 113)";
    }
  }
  count++;
};
