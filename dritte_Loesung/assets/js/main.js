//# 3. Lösung

//! Output-Felder:
const youChooseOutput = document.querySelector(".you-choose");
const CPUChooseOutput = document.querySelector(".CPU-chooses");
const resultOutput = document.querySelector(".result");

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
  } else {
    switch (playerChoice) {
      case "rock":
        computerChoice === "scissors"
          ? (resultOutput.innerHTML = "Result: You win")
          : (resultOutput.innerHTML = "Result: You lose");
        break;
      case "paper":
        computerChoice === "rock"
          ? (resultOutput.innerHTML = "Result: You win")
          : (resultOutput.innerHTML = "Result: You lose");
        break;
      case "scissors":
        computerChoice === "paper"
          ? (resultOutput.innerHTML = "Result: You win")
          : (resultOutput.innerHTML = "Result: You lose");
        break;
    }
  }
};

// ! Restart game, empty outputs:
const restart = () => {
  youChooseOutput.innerHTML = "";
  CPUChooseOutput.innerHTML = "";
  resultOutput.innerHTML = "";
};
