// Primitive data types are passed by value.
// A copy of the actual value is passed, not the reference.
// Changes do not affect the original variable.

// 7 types: String,Number,Boolean,null,undefined,Symbol(Unique banane ke liye use karte hai)
//BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)


const bigNumber = 764736576767834964n // it is used to store large value of int

const heros = ["shaktiman","nagaraj","doga"]
let myObj = {
    name:"prince",
    age:"22",
}


const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros)
console.log(typeof outsideTemp);


// JavaScript is a dynamically typed language. ✅

// Why?

// Variable ka type runtime par decide hota hai

// Ek hi variable alag-alag types ki value hold kar sakta hai

// Type declare karna pehle se zaroori nahi

// Example
// let x = 10;        // number
// x = "hello";      // string
// x = true;         // boolean

//Refernence (Non primitive)

//Array,Objects, Functions