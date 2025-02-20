let numeriEstratti = [];
const createGrid = function () {
  const tabellone = document.getElementById("tabellone");
  for (let i = 1; i <= 90; i++) {
    const numbersOfCells = document.createElement("div");
    numbersOfCells.classList.add("number");
    numbersOfCells.textContent = i;
    tabellone.appendChild(numbersOfCells);
  }
};
const extractNumber = function () {
  if (numeriEstratti.length <= 76) {
    alert("END GAME!");
  }
};
const estraiNumero = function () {
  const number = Math.ceil(Math.random() * 90);
  if (number !== numeriEstratti.includes(number));
};

createGrid();
