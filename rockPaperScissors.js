const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput; 
    } else { 
      console.log('not a valid option');
    }
  }

  function getComputerChoice() {
    let getComputerChoice = Math.floor(Math.random() * 3);
    switch(getComputerChoice){
      case 0:
      return 'rock';
      case 1:
      return 'paper';
      case 2:
      return 'scissors'
    
    }
    }
    console.log(getComputerChoice());

    const getUserChoice = (userInput) => {
        userInput = userInput.toLowerCase();
        if (
          userInput === "rock" ||
          userInput === "paper" ||
          userInput === "scissors" ||
          userInput === 'BOMB'
        ) {
          return userInput;
        } else {
          console.log("not a valid option");
        }
      };
      
      function getComputerChoice() {
        let getComputerChoice = Math.floor(Math.random() * 3);
        switch (getComputerChoice) {
          case 0:
            return "rock";
          case 1:
            return "paper";
          case 2:
            return "scissors";
        }
      }
      
      function determineWinner(userChoice, computerChoice) {
         if (userChoice === 'BOMB'){
          return 'Da bomb always wins'
        }
        if (userChoice === computerChoice) {
          return "Tie game, play again";
        }
        if (userChoice === "rock") {
          if (computerChoice === "paper") {
            return "Computer wins :/";
          } else {
            return "User wins!";
          }
        }
      
        if (userChoice === "paper") {
          if (computerChoice === "scissors") {
            return "computer Wins :/";
          } else {
            return "User wins!";
          }
        }
        if (userChoice === "scissors") {
          if (computerChoice === "rock") {
            return "computer Wins :/";
          } else {
            return "YOU WIN MUHFUGGUH";
          }
        }
      }
      
      function playGame() {
        const userChoice = getUserChoice("scissors", "rock", "paper");
        const computerChoice = getComputerChoice();
        console.log('You rolled ' + userChoice);
        console.log('The CPU rolled ' + computerChoice);
       console.log(determineWinner(userChoice, computerChoice));
      
      };
       
      playGame();
      