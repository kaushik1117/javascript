// *****Primitive*****

//Primitive are "called by value" ,that means
//the data which we give is stored as a copy and changes made are done to the copied data

// 7 types : String, Number, boolean, null, undefined, Symbol, BigInt

//undefined - variable declared-memory space is also declared but we don't know what value is going inside of it, so undefined
//null      - not zero, but empty
//symbol    - used to make any value or component uniqued,used in frontend development
//            (you can say as separate dataype/user defined dataype)

const score = 100  //js automatically gives the type(number)
const scoreValue = 100.3

const Loggedin = true//boolean
const outsideTemp = null//null
let userEmail;//has undefined beacuse we've declared the variable but did not give the ata that should go inside

//Symbol

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log (id == anotherId);//false

//BigInt

const bigNumber = 1274747378584743838n
//console.log(typeof bigNumber);//bigint


// *****Reference(Non Primitive)*****

//-> call by reference

//-> Array, Objects, Functions

const heros = ["shaktiman", "nagraj"]//array
//console.log(heros);//[ 'shaktiman', 'nagraj' ]
//console.log(typeof heros);//object

//object
let myObj = {
    name : "kaushik",
    age : 20,
}
//console.log(myObj);//{ name: 'kaushik', age: 20 }
//console.log(typeof myObj);//object

//function
const myFunction = function(){
    console.log("hello world");
}
//myFunction();

//console.log(typeof myFunction);//function

//https://262.ecma-international.org/5.1/#sec-11.4.3

//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(used in Primitive DT) and Heap(Used in Non Primitive DT) memory
//variables defined in stack memory gives us a copy of the original memory/value but
//variables defined in heap gives us the reference(original) memory

let myYoutubeName = "potrukaushik"//copy(stack memory)

let anothername = myYoutubeName
anothername = "kaushik"

console.log(myYoutubeName);
console.log(anothername);

let userOne = {//objects have reference(heap memory)
    email : "user@google.com",
    upi  : "user@ybl"
}

let userTwo = userOne

userTwo.email = "kaushik@google.com"

console.log(userOne);
console.log(userTwo); 