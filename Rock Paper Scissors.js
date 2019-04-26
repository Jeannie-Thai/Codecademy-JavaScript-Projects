//player vs computer in a game of "Rock, Paper, Scissors"

//if user inputs e.g Paper or paper, make sure result will be in lowercase
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
//check if user choice is 'rock', 'paper', 'scissors' or 'bomb' (secret cheat code) otherwise, return error. 
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error, please type: rock, paper or scissors');
  }
}

//computer choice
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';                  
	}
}

//check who is the winner
const determineWinner = (userChoice, computerChoice)=>{
  if (userChoice === computerChoice){
    return "This game is a tie!";
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "Sorry, the computer won!";
    } else{
      return "Congratulations, you won!";
    }
  }
    if (userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'Sorry, the computer won!';
      }else{
        return "Congratulation, you won!";
      }
    }
  
  	if (userChoice === 'scissors'){
      if (computerChoice === 'rock'){
        return 'Sorry, the computer won!';
      } else {
        return "Congratulations, you won";
      }
    }
  
  if (userChoice === 'bomb'){
    return 'Congratulation, you won!';
  }
}

//start the game. 
const playGame = () => {
  const userChoice = getUserChoice('Paper');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  
//who won?
  console.log(determineWinner(userChoice, computerChoice));
}

//play the game
playGame();
