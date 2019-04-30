//Convert any text to whale language! 

let input = 'Hi, Human!';
//console.log(input.length)
let vowels = ['a','e','i','o','u'];
let resultArray = [];

//compare input string and vowels array and find vowels in the input string
for (let i = 0; i < input.length; i++) {
	//console.log('i is '+ i);
  for (let j = 0; j < vowels.length; j++) {
    //console.log('j is '+ j);
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }
	}
  //double the 'e' and the 'u' 
  if (input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
  }
 }

console.log(resultArray.join('').toUpperCase());
