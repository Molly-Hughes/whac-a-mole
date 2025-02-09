let currMoleTile;
let currPiranhaTile;
let score = 0;
let gameOver = false;
let timer = 0;

window.onload = function () {
  setGame();
};

function setGame() {
  for (let i = 0; i < 9; i++) {
    let tile = document.createElement("div");
    tile.id = i.toString();
    tile.addEventListener("click", selectTile);
    document.getElementById("board").appendChild(tile);
  }

  setInterval(setMole, 1000);
  setInterval(setPiranha, 2000);
}

function getRandomTile() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}

function setMole() {
  if (gameOver) {
    return;
  }

  if (currMoleTile) {
    currMoleTile.innerHTML = "";
  }

  let mole = document.createElement("img");
  mole.src = "assets/monty-mole.png";
  let num = getRandomTile();

  if (currPiranhaTile && currPiranhaTile.id === num) {
    return;
  }

  currMoleTile = document.getElementById(num);
  currMoleTile.appendChild(mole);
}

function setPiranha() {
  if (gameOver) {
    return;
  }
  if (currPiranhaTile) {
    currPiranhaTile.innerHTML = "";
  }

  let piranha = document.createElement("img");
  piranha.src = "assets/piranha-plant.png";
  let num = getRandomTile();

  if (currMoleTile && currMoleTile.id === num) {
    return;
  }

  currPiranhaTile = document.getElementById(num);
  currPiranhaTile.appendChild(piranha);
}

function selectTile() {
  if (gameOver) {
    return;
  }

  if (this === currMoleTile) {
    score += 10;
    document.getElementById("score").innerText = score.toString();
  } else if (this === currPiranhaTile) {
    let scoreText = document.getElementById("score-text");
    scoreText.innerText = `GAME OVER! Player Score: ${score}`;
    gameOver = true;
  }
}
