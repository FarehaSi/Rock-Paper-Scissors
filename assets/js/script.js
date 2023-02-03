const WEAPONS = [
    {
      id: "rock",
      name: "Rock",
      imgSrc: "rock.png",
      winsOver: "scissors",
    },
    {
      id: "scissors",
      name: "Scissors",
      imgSrc: "scissors.png",
      winsOver: "paper",
    },
    {
      id: "paper",
      name: "Paper",
      imgSrc: "paper.png",
      winsOver: "rock",
    },
  ];

  function chooseWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        // Draw
    }

    // playerChoice - rock; computerChoice - paper
    const playerChoiceConfig = WEAPONS.find
    (eachWeapon => eachWeapon.id === playerChoice);

    if(playerChoiceConfig.winsOver === computerChoice) {
        // Player wins
    } else {
        // Computer wins
    }
}