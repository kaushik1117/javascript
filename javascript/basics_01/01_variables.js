const accountId = 19292
let accountEmail = "hello@gmail.com"
var accountPassword = '12345'
accountCity = "Hyderabad"
let accountState;
// accountId = 2
//cannot change const, it is not allowed

accountEmail="hbcue@gmail.com"
accountPassword='9299'
accountCity="mumbai"

console.log(accountId)
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountState])
