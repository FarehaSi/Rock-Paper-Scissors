const WEAPONS = [
    {
      id: "rock",
      name: "Rock",
      imgSrc: "./assets/images/rock.png",
      winsOver: ["scissors", "lizard"],
    },
    {
      id: "paper",
      name: "Paper",
      imgSrc: "./assets/images/paper.png",
      winsOver: ["rock", "spock"],
    },
    {
      id: "scissors",
      name: "Scissors",
      imgSrc: "./assets/images/scissors.png",
      winsOver: ["paper", "lizard"],
    },
    {
      id: "lizard",
      name: "Lizard",
      imgSrc: "./assets/images/lizard.png",
      winsOver: ["spock", "paper"],
    },
    {
      id: "spock",
      name: "Spock",
      imgSrc: "./assets/images/spock.png",
      winsOver: ["scissors","rock"],
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
        updateResultMsg("You both chose " + playerChoice + ". It's a DRAW! 🫤");
        return;
    }

    const playerChoiceConfig = WEAPONS.find(eachWeapon => eachWeapon.id === playerChoice);

    if(playerChoiceConfig.winsOver.includes(computerChoice)) {
        // Player wins
        updateResultMsg("You chose " + playerChoice + ", the computer chose " + computerChoice + ". You WIN!!! 😀🥳😎");
        playerScore++;
    } else {
        // Computer wins
        updateResultMsg("You chose " + playerChoice + ", the computer chose " + computerChoice + ". You LOSE! 😒 ");
        computerScore++;
    }

    updateScores();
}

function updateScores() {
  scoreWrapperEl.innerHTML =
  "<span>" + playerScore + "</span>:<span>" + computerScore + "</span>";
}

function updateResultMsg(msg) {
  resultWrapperEl.innerHTML = msg;
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

let gameRules = document.getElementById('rules');
gameRules.innerHTML = "(Rules: Scissors cut paper. Paper covers rock. Rock crushes scissors. Lizard poisons Spock. Spock smashes Scissors. Scissors decapitates Lizard. Lizard eats Paper. Paper disproves Spock. Spock vaporizes Rock.)";
