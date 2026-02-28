const accountId = 144553
let accountEmail = "pandey@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

//accountId = 2 //not allowed
accountEmail = "hc@hc"
accountPassword = "212212"
accountCity = "Banglore" // alowed in js, but don't follow this bad habit
let accountState;
console.log(accountId);

// {}--let help to remove the problem of scope, it is limited to block scoped
/*
Prefer not to use var-- it is not limited to blocked space, it is limited to functional scope.
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
