//# 4. Lösung

//! Output-Felder:
const youChooseOutput = document.querySelector(".you-choose");
const CPUChooseOutput = document.querySelector(".CPU-chooses");
const resultOutput = document.querySelector(".result");
const spielstandOutput = document.querySelector(".spielstand");
const finalWinner = document.querySelector(".final-winner");

//! Array für Computer-Input:
const choices = ["scissors", "rock", "paper"];

//! Variablen für Spielstand:
let userPoints = 0;
let cpuPoints = 0;
let rounds = 0;

//! Funktion, um Spiel zu starten:
const play = (playerChoice) => {
  // Zufallswahl des Computers:
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  if (playerChoice === computerChoice) {
    youChooseOutput.innerHTML = `You choose: ${playerChoice}`;
    CPUChooseOutput.innerHTML = `CPU chooses: ${computerChoice}`;
    resultOutput.innerHTML = "Result: draw";
    // Rundenzählung:
    rounds += 1;
  } else if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    youChooseOutput.innerHTML = `You choose: ${playerChoice}`;
    CPUChooseOutput.innerHTML = `CPU chooses: ${computerChoice}`;
    resultOutput.innerHTML = "Result: You lose";

    // Runden- und CPU-Punktezählung:
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

    // Runden- und Deine-Punktezählung:
    rounds += 1;
    userPoints += 1;
  } else {
    resultOutput.innerHTML = "Bitte wähle ein Element aus.";
  }

  // Output im HTML der gewählten Objekte und der Punkte:
  youChooseOutput.innerHTML = `You choose: ${playerChoice}`;
  CPUChooseOutput.innerHTML = `CPU chooses: ${computerChoice}`;
  spielstandOutput.innerHTML = `Your points: ${userPoints} | CPU's points: ${cpuPoints} | Rounds: ${rounds}`;

  // Ergänzung: ab 5 erreichten Punkten soll finaler Gewinner oder Verlierer ausgegeben werden:
  if (userPoints === 5) {
    finalWinner.innerHTML = "You are the final winner! 🥳";
  } else if (cpuPoints === 5) {
    finalWinner.innerHTML = `You lost 😔 Try again and restart the game?`;
  } else {
  }
};

// ! Restart game, empty outputs:
const restart = () => {
  youChooseOutput.innerHTML = "";
  CPUChooseOutput.innerHTML = "";
  resultOutput.innerHTML = "";
};
