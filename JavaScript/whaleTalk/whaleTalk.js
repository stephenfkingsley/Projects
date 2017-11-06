let input = 'I love to code at codecademy!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
input = input.toLowerCase();

for (let inputIndex = 0; inputIndex < input.length; inputIndex++)
  {
    for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++)
      {
        if (input[inputIndex] === vowels[vowelIndex])
          {
            resultArray.push(input[inputIndex]);
          }
      }
    if (input[inputIndex] === 'e')
      {
        resultArray.push(input[inputIndex]);
      }
    else if (input[inputIndex] === 'u')
      {
        resultArray.push(input[inputIndex]);
      }
  }

console.log(resultArray.join('').toUpperCase());
