//# 4. Lösung

//! Output-Felder:
const youChooseOutput = document.querySelector(".you-choose");
const CPUChooseOutput = document.querySelector(".CPU-chooses");
const resultOutput = document.querySelector(".result");
const spielstandOutput = document.querySelector(".spielstand");

//! Array für Computer-Input:
const choices = ["scissors", "rock", "paper"];

//! Variablen für Spielstand:
let userPoints = 0;
let cpuPoints = 0;
let rounds = 0;

//! Funktion, um Spiel zu starten:
const play = (playerChoice) => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  console.log(playerChoice);

  if (playerChoice === computerChoice) {
    youChooseOutput.innerHTML = `You choose: ${playerChoice}`;
    CPUChooseOutput.innerHTML = `CPU chooses: ${computerChoice}`;
    resultOutput.innerHTML = "Result: draw";
    rounds += 1;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    youChooseOutput.innerHTML = `You choose: ${playerChoice}`;
    CPUChooseOutput.innerHTML = `CPU chooses: ${computerChoice}`;
    resultOutput.innerHTML = "Result: You lose";

    rounds += 1;
    cpuPoints += 1;
  } else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "rock" && computerChoice === "scissors")
  ) {
    youChooseOutput.innerHTML = `You choose: ${playerChoice}`;
    CPUChooseOutput.innerHTML = `CPU chooses: ${computerChoice}`;
    resultOutput.innerHTML = "Result: You win";

    rounds += 1;
    userPoints += 1;
  } else {
    resultOutput.innerHTML = "Bitte wähle ein Element aus.";
  }

  youChooseOutput.innerHTML = `You choose: ${playerChoice}`;
  CPUChooseOutput.innerHTML = `CPU chooses: ${computerChoice}`;
  spielstandOutput.innerHTML = `Your points: ${userPoints} | CPUs points: ${cpuPoints} | Rounds: ${rounds}`;
};

// ! Restart game, empty outputs:
const restart = () => {
  youChooseOutput.innerHTML = "";
  CPUChooseOutput.innerHTML = "";
  resultOutput.innerHTML = "";
};
