//# 1. Lösung
//* ToDo
// 1. drei Output-Felder festlegen
// 2. Funktion für je Schere, Stein und Papier verknüpfen (oder eine Funktion mit Parametern - wie?!)
// 3. Value auslesen
// 4. Zufallstreffer generieren
// 5. if/else Vergleich von Value und Zufallstreffer
// 6. verzögerte Ausgabe von den 3 Output-Feldern
// 7. Funktion zum Felder leeren für den Button restart game

const youChooseOutput = document.querySelector(".you-choose");
const CPUChooseOutput = document.querySelector(".CPU-chooses");
const resultOutput = document.querySelector(".result");

const playScissor = () => {
  const computer = Math.ceil(Math.random() * 3);
  const player = 1;
  youChooseOutput.innerHTML = "You choose: scissor";
  //   console.log(computer);

  if (computer === player) {
    CPUChooseOutput.innerHTML = "CPU chooses: scissor";
    resultOutput.innerHTML = "Result: draw";
    console.log(computer, player, "draw");
  } else if (computer === 2) {
    CPUChooseOutput.innerHTML = "CPU chooses: stone";
    resultOutput.innerHTML = "Result: Computer wins";
    console.log(computer, player, "computer wins");
  } else if (computer === 3) {
    CPUChooseOutput.innerHTML = "CPU chooses: paper";
    resultOutput.innerHTML = "Result: You win";
    console.log(computer, player, "player wins");
  } else {
    resultOutput.innerHTML = "Bitte wähle ein Element aus.";
  }
};

const playStone = () => {
  const computer = Math.ceil(Math.random() * 3);
  const player = 2;
  youChooseOutput.innerHTML = "You choose: stone";

  if (computer === player) {
    CPUChooseOutput.innerHTML = "CPU chooses: stone";
    resultOutput.innerHTML = "Result: draw";
    console.log(computer, player, "draw");
  } else if (computer === 3) {
    CPUChooseOutput.innerHTML = "CPU chooses: paper";
    resultOutput.innerHTML = "Result: Computer wins";
    console.log(computer, player, "computer wins");
  } else if (computer === 1) {
    CPUChooseOutput.innerHTML = "CPU chooses: scissor";
    resultOutput.innerHTML = "Result: You win";
    console.log(computer, player, "player wins");
  } else {
    resultOutput.innerHTML = "Bitte wähle ein Element aus.";
  }
};

const playPaper = () => {
  const computer = Math.ceil(Math.random() * 3);
  const player = 3;
  youChooseOutput.innerHTML = "You choose: paper";

  if (computer === player) {
    CPUChooseOutput.innerHTML = "CPU chooses: paper";
    resultOutput.innerHTML = "Result: draw";
    console.log(computer, player, "draw");
  } else if (computer === 1) {
    CPUChooseOutput.innerHTML = "CPU chooses: scissor";
    resultOutput.innerHTML = "Result: Computer wins";
    console.log(computer, player, "computer wins");
  } else if (computer === 2) {
    CPUChooseOutput.innerHTML = "CPU chooses: stone";
    resultOutput.innerHTML = "Result: You win";
    console.log(computer, player, "player wins");
  } else {
    resultOutput.innerHTML = "Bitte wähle ein Element aus.";
  }
};

const restart = () => {
  youChooseOutput.innerHTML = "";
  CPUChooseOutput.innerHTML = "";
  resultOutput.innerHTML = "";
};

// const userInput = document.querySelector(".schere");
// console.log(userInput);
