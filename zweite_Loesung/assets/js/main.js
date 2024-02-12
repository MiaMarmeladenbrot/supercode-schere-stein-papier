//# 2. Lösung

//! Output-Felder:
const youChooseOutput = document.querySelector(".you-choose");
const CPUChooseOutput = document.querySelector(".CPU-chooses");
const resultOutput = document.querySelector(".result");

//! User-Input:
const userInputScissors = document.querySelector("#scissors").id;
const userInputRock = document.querySelector("#rock").id;
const userInputPaper = document.querySelector("#paper").id;
// console.log(userInputSchere);
// console.log(userInputStein);
// console.log(userInputPapier);

//! Array für Computer-Input:
const choices = ["scissors", "rock", "paper"];

//! Funktion, um Spiel zu starten:
const play = (playerChoice) => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  console.log(playerChoice);

  youChooseOutput.innerHTML = `You choose: ${playerChoice}`;
  CPUChooseOutput.innerHTML = `CPU chooses: ${computerChoice}`;

  if (playerChoice === computerChoice) {
    resultOutput.innerHTML = "Result: draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    resultOutput.innerHTML = "Result: You lose";
  } else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "rock" && computerChoice === "scissors")
  ) {
    resultOutput.innerHTML = "Result: You win";
  } else {
    resultOutput.innerHTML = "Bitte wähle ein Element aus.";
  }
};

// ! Restart game, empty outputs:
const restart = () => {
  youChooseOutput.innerHTML = "";
  CPUChooseOutput.innerHTML = "";
  resultOutput.innerHTML = "";
};
