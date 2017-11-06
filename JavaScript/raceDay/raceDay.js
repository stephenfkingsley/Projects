let raceNumber = Math.floor(Math.random()*1000);
let earlyRegister = false;
const age = 18;

if (!earlyRegister)
  {
    raceNumber+= 1000;
  }

if (age > 18 & earlyRegister === true)
  {
    console.log(`You will race at 9:30am and your racenumber will be ${raceNumber}.`);
  }
else if (age > 18 || earlyRegister === true)
  {
    console.log(`You will race at 11:00am and your racenumber will be ${raceNumber}.`);
  }
else if (age < 18 & earlyRegister === false)
  {
    console.log(`You will race at 12:30pm and your racenumber will be ${raceNumber}.`);
  }
else
  {
    console.log('Please see the registration desk.');
  }
