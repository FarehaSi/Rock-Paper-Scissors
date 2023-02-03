const WEAPONS = [
    {
      id: "rock",
      name: "Rock",
      imgSrc: "./assets/images/rock.png",
      winsOver: "scissors",
    },
    {
      id: "paper",
      name: "Paper",
      imgSrc: "./assets/images/paper.png",
      winsOver: "rock",
    },
    {
      id: "scissors",
      name: "Scissors",
      imgSrc: "./assets/images/scissors.png",
      winsOver: "paper",
    },
  ];

const resultWrapperEl = document.querySelector(".game-result");
const weaponsEl = document.querySelector(".weapons-wrapper");
const scoreWrapperEl = document.querySelector(".score-wrapper");
let playerScore = 0;
let computerScore = 0;

function chooseWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        // Draw
        resultWrapperEl.innerHTML = "You both chose " + playerChoice + ". It's a DRAW! 🫤";
        return false;
    }

    const playerChoiceConfig = WEAPONS.find
    (eachWeapon => eachWeapon.id === playerChoice);

    if(playerChoiceConfig.winsOver === computerChoice) {
        // Player wins
        resultWrapperEl.innerHTML =
      "You chose " + playerChoice + ". The computer chose " + computerChoice + ". You WIN!!! 😀🥳😎";
      playerScore++;
    } else {
        // Computer wins
        resultWrapperEl.innerHTML =
      "You chose " + playerChoice + ". The computer chose " + computerChoice + ". You LOSE! 😒 ";
      computerScore++;
    }
  
    scoreWrapperEl.innerHTML =
    "<span>" + playerScore + "</span>:<span>" + computerScore + "</span>";
}

function createWeaponImageEl(weapon) {
  const imgEl = document.createElement("img");
  imgEl.src = weapon.imgSrc;
  imgEl.className = "weapon-img";
  return imgEl;
}

function generatePlayerWeapons() {
  weaponsEl.innerHTML = "";
  WEAPONS.forEach(function (item) {
    let el = createWeaponImageEl(item);
    el.onclick = function () {
      let computerChoice = WEAPONS[Math.floor(Math.random() * WEAPONS.length)];
      chooseWinner(item.id, computerChoice.id);
    };
    weaponsEl.append(el);
  });
}

generatePlayerWeapons();
