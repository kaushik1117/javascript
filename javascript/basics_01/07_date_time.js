//Dates

let myDate = new Date()
//console.log(myDate.toDateString());//Tue Feb 27 2024
//console.log(myDate.toLocaleString());//27/2/2024, 10:44:59 pm

//typeof - Object

let myCreatedDate = new Date(2023, 0, 23, 5, 3)//yy,mm,dd,hh,mm
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
//console.log(myTimeStamp);//milli second value from 1970 to now
//console.log(myCreatedDate.getTime());//Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
//console.log(newDate);
//console.log(newDate.getDay());
//console.log(newDate.getMonth() +1);

//console.log( `${newDate.getDay()} and the time ${newDate.getTime()} `);

newDate.toLocaleString('default',{
    weekday : "long",
    
})

