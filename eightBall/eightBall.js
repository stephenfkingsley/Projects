let userName = 'Stephen';

userName ? console.log(`Hello, ${userName}!`): console.log('Hello!');

let userQuestion = 'What is your favorite color?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ' ';
console.log(`${userName}, you asked: ${userQuestion}`);
console.log('The answer: ');

switch (randomNumber)
  {
    case 0:
      console.log('It is certain');
      break;
    case 1:
      console.log('It is decidedly so');
      break;
    case 2:
      console.log('Reply hazy try again');
      break;
    case 3:
      console.log('Cannot predict now');
      break;
    case 4:
      console.log('Don\'t count on it');
      break;
    case 5:
      console.log('My sources say no');
      break;
    case 6:
      console.log('Outlook not so good');
      break;
    case 7:
      console.log('Signs point to yes');
      break;
  }

if (randomNumber === 0)
  {
    eightBall = 'It is certain';
  }
else if (randomNumber === 1)
  {
    eightBall = 'It is decidedly so';
  }
else if (randomNumber === 2)
  {
    eightBall = 'Reply hazy try again';
  }
else if (randomNumber === 3)
  {
    eightBall = 'Cannot predict now';
  }
else if (randomNumber === 4)
  {
    eightBall = 'Don\'t count on it';
  }
else if (randomNumber === 5)
  {
    eightBall = 'My sources say no';
  }
else if (randomNumber === 6)
  {
    eightBall = 'Outlook not so good';
  }
else
  {
    eightBall = 'Signs point to yes';
  }
