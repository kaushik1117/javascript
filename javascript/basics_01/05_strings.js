//in js, string is not an array but a "key-value" pair object
//what is an object?Object is a new datatype itself,refer previous notes

const name = "kaushik"
const repoCount = 5

//console.log(name + repoCount +" Value");

//backticks``
//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

//String declaration as a object
const gameName = new String('kaushik-17-11')
//go to google console and check the various methods

//console.log(gameName[3]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
//console.log(gameName.charAt(3));
//console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)//0(k) to 4-1(s)//does not support negative like slice func
//console.log(newString);

const anotherString = gameName.slice(-7,4)//- starts from back
//console.log(anotherString);

const newStringOne = "   kaushik   "
//console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudary";
//console.log(url.replace('%20', '-'));
//console.log(url.includes('kaushik'));
//console.log(url.includes('tesh'));


console.log(gameName.split('-'));//divides based on argument given
//does not show the argument which is used like '-' is not printed



/*console.log(typeof(gameName));
console.log(typeof(anotherString));
console.log(typeof(newString));
console.log(typeof(name));
console.log(typeof(url));*/



