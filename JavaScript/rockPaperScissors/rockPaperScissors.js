//rockPaperScissors

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
 } else {
    console.log("Error: You did not enter rock, paper, or scissors.");
 }
 };

const getComputerChoice = () => {
  let computerInput = Math.floor(Math.random() * 3);
  if (computerInput === 0) {
    return 'rock';
  } else if (computerInput === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
 };

 const determineWinner = (userChoice, computerChoice) =>
 {
   if (userChoice === 'bomb')
     {
     console.log("User Wins!.");
     }
   else if (userChoice === computerChoice)
     {
     console.log("It was a Tie.");
     }
   else if (userChoice === 'rock')
     {
       if (computerChoice === 'paper')
         {
         return console.log("Computer Wins!");
         }

       else
         {
         return console.log("User Wins!"); // won with scissors
      }  }
   else if (userChoice === 'paper')
     {
        if (computerChoice === 'rock')
          {
          console.log("User Wins!");
          }

        else
        {
          console.log("Computer Wins!"); // won with scissors
      }  }
    else if (userChoice === 'scissors')
  {
        if (computerChoice === 'rock')
      {
        console.log("Computer Wins!");
      }
       else
     {
       console.log("User Wins!"); // user won with paper
  }  }
 };

const playGame = () =>
{
 const userChoice = getUserChoice('scissors');

 const computerChoice = getComputerChoice();

 console.log(`The user choice is: ${userChoice}. The computer choice is:  ${computerChoice}.`);

  console.log();

  console.log(determineWinner(userChoice, computerChoice));

};

playGame();
