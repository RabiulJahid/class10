

// ASSAINGMENT

// 1 Email Pattern

let text = "rabiuljahid@hotmail.com";

let pattern = /^[a-z0-9._-]*@[a-z0-9]{2,8}\.[a-z]{2,5}$/;

console.log(pattern.test(text));


// 2 username pattern

let text = "@rabiul_1990a";
let pattern = /^[a-zA-z0-9!@#$%^&*()_+]*[a-zA-Z0-9]*[~`@#$%^&*()_+:;'",./?,<>][a-zA-Z0-9]*$/ ;
console.log(pattern.test(text));



// 3 Bangladeshi phone number pattern

let text = "+8801714647597";
let pattern = /^(\+8801|01|008801)[0-9]{9}$/;
console.log( pattern.test(text));


// 4 password pattern

let text = "jahid*!_@?}(A9Password";
let pattern = /^[a-zA-Z0-9]*[~`!@#$%^&*()_+,./?'";:{[}]*[a-zA-Z0-9]{8,}$/;
console.log(pattern.test(text));


// 5 ZIP Code pattern

let text = "5670";
let pattern = /^[0-9]{4,8}$/;
console.log(pattern.test(text));
