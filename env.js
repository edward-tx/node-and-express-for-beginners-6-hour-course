//require("dotenv").config();
// without requiring dotenv, can still get the values from 
// the command line by typing:
// node -r dotenv/config env.js

console.log(process.env.NAME);
console.log(process.env.PROFESSION);
console.log("I am starting a new series on", process.env.COURSE);