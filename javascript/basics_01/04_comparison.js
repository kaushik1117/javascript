//console.log(2 > 1);
// 2 >=1
// 2 < 1
// 2 == 1
// 2 !=1

//console.log("2" > 1);//true
//console.log(2 > "1");//true

// console.log(null > 0);//false
// console.log(null == 0);//false
// console.log(null >= 0);//true

//unpredictability and inconsistent

//reason : equality check(==) and comparison work differently
//comparison operator converts null to number which is 0
//that's why null>=0 is true and null > 0 is false

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined <= 0);
//all give false in case of undefined

//strict check(===)
//checks the datatype also and does not convert the datatype

//console.log("2" === 2);
//false because the datatype is different and strict check does not converts the datatype while comparing 
