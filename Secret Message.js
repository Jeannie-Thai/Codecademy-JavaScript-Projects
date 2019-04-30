//Transform an array of strings into a secret message!
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//console.log(secretMessage.length);
secretMessage.pop(); //remove string Javascript
//console.log(secretMessage);
//console.log(secretMessage.length);

secretMessage.push('to','Program') //add two elements 

secretMessage[7] = 'right'; //replace 7th element, easily
//console.log(secretMessage);

secretMessage.shift(); //remove first string of the array
//console.log(secretMessage);

secretMessage.unshift('Programming'); //add first string
//console.log(secretMessage);

secretMessage.splice(6, 5,'know,'); //remove strings from get to time and replace with single string know
//console.log(secretMessage);

console.log(secretMessage.join(' ')); //print as a sentence

