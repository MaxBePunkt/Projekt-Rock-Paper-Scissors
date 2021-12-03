let button = document.getElementsByTagName("button");
let inputs = document.getElementsByTagName("input");
let wrapDivRadios = document.querySelector(".wrapDivRadios");
let compText = "";
let count = 1;
let rounds = 5;

let radioChange = () => {
  for (let j = 0; j < inputs.length; j++) {
    if (inputs[j].checked) {
      rounds = Number(inputs[j].value);
    }
  }
};
if (count > rounds) {
  button.disabled = true;
}

let startGame = () => {
  let compNum = Math.floor(Math.random() * 3);

  wrapDivRadios.innerHTML = `${count} / ${rounds}`;

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

  for (let i = 0; i < button.length; i++) {
    // console.log(button[i].value);
    if (button[i].value == "rock") {
      //   console.log("rock");
    } else {
      //   console.log("geht nicht");
    }
  }
  if (count >= rounds) {
    return null;
  }
  count++;
};
