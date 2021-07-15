const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const startScreen = document.querySelector(".start");
const battleScreen = document.querySelector(".battle");
let youPick = document.getElementById("youPick");
let housePick = document.getElementById("housePick");

const result = document.querySelector(".result");
let whatTheResult = document.getElementById("whatTheResult");

const score = document.getElementById("scoreNum");
let count = 0;

const playAgain = document.getElementById("play");

const btnRules = document.getElementById("btn-rules");
const btnClose = document.getElementById("btn-close");
const showRules = document.querySelector(".showRules");

function judge(a, b) {
  if (a === b) {
    return "Drow";
  } else if (a === "paper" && b === "rock") {
    return "Win";
  } else if (a === "paper" && b === "scissors") {
    return "Lose";
  } else if (a === "scissors" && b === "paper") {
    return "Win";
  } else if (a === "scissors" && b === "rock") {
    return "Lose";
  } else if (a === "rock" && b === "paper") {
    return "Lose";
  } else if (a === "rock" && b === "scissors") {
    return "Win";
  } else {
    alert("Somethings wrong");
  }
}

function houseChoice(item) {
  const option = ["paper", "scissors", "rock"];
  let ranNum = Math.floor(Math.random() * 3);
  let housePicked = option[ranNum];
  console.log("House: " + housePicked);
  housePick.classList.remove("blank");
  housePick["background-image"] = `./images/icon-${housePicked}.svg`;
  housePick.classList.add(housePicked);
  setTimeout(() => {
    const judgement = judge(item, housePicked);
    if (judgement === "Win") {
      youPick.classList.add("winner");
      count += 1;
      score.innerText = count;
    } else if (judgement === "Lose") {
      housePick.classList.add("winner");
    }

    result.classList.remove("hide");
    whatTheResult.innerText = `You ${judgement}!!`;
  }, 1000);
}

function handleClick(e) {
  let youPicked = e.target.id;
  console.log("You: " + youPicked);
  // Start
  if (!startScreen.classList.contains("hide")) {
    startScreen.classList.add("hide");
    battleScreen.classList.remove("hide");
  }

  youPick["background-image"] = `./images/icon-${youPicked}.svg`;
  if (youPicked === "paper") {
    youPick.classList.add("paper");
  } else if (youPicked === "scissors") {
    youPick.classList.add("scissors");
  } else {
    youPick.classList.add("rock");
  }

  // randomPicker();
  setTimeout(() => {
    houseChoice(youPicked);
  }, 2000);
}
// Reset
function handlePlayAgain() {
  youPick.classList.remove("winner");
  housePick.classList.remove("winner");
  housePick.classList.add("blank");

  housePick.classList.remove("paper");
  housePick.classList.remove("rock");
  housePick.classList.remove("scissors");

  youPick.classList.remove("paper");
  youPick.classList.remove("rock");
  youPick.classList.remove("scissors");

  startScreen.classList.remove("hide");
  battleScreen.classList.add("hide");
  result.classList.add("hide");

  youPick["background-image"] = "";
  youPicked = "";
  housePicked = "";
}

paper.addEventListener("click", handleClick);
scissors.addEventListener("click", handleClick);
rock.addEventListener("click", handleClick);

playAgain.addEventListener("click", handlePlayAgain);

btnRules.addEventListener("click", () => {
  showRules.classList.add("show");
});
btnClose.addEventListener("click", () => {
  showRules.classList.remove("show");
});
