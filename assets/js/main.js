let button = document.getElementsByTagName("button");
let inputs = document.getElementsByTagName("input");
let wrapDivRadios = document.querySelector(".wrapDivRadios");
let resultPoints = document.querySelector("#resultPoints");
let playHead = document.querySelector("#playHead");
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
      break;
    case "rockpaper":
      compPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${compText} beats ${userChoice}`;

      break;
    case "paperscissors":
      compPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${compText} beats ${userChoice}`;
      break;
    case "scissorspaper":
      userPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${userChoice} beats ${compText}`;

      break;
    case "scissorsrock":
      compPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${compText} beats ${userChoice}`;
      break;
    case "rockscissors":
      userPoints += 1;
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${userChoice} beats ${compText}`;

      break;
    default:
      resultPoints.innerHTML = `${userPoints} : ${compPoints}`;
      playHead.innerHTML = `${userChoice} vs ${compText} : tie`;
  }
  count++;
};
