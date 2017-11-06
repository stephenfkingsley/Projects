//sleep Debt Calculator

const getSleepHours = (day) =>
{
  if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday' || day === 'Saturday' || day === 'Sunday')
    {
      return 7;
    }
};

getSleepHours('Sunday');

const getActualSleepHours = () =>
getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')

const getIdealSleepHours = () =>
{
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () =>
{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

if (actualSleepHours === idealSleepHours)
  {
    console.log('You got the perfect amount of sleep!');
  }

else if (actualSleepHours > idealSleepHours)
  {
    console.log(`You got ${actualSleepHours - idealSleepHours} more hours of sleep than your ideal sleep this week you sleepaholic!`);
  }

else
{
  console.log(`You should get some rest! You got ${idealSleepHours - actualSleepHours} hours less sleep this week than your ideal sleep.`);
}

};

calculateSleepDebt()
