// const x = "1";
// const y = "2";

// console.log(x, y);

// %s format variable to a string
// %d to digit
// %i to integer
// %o to object

// console.log("I am %s and my age is %d", 'Edward', 62);
// console.clear();
// console.count("I am Edward");
// console.count("I am Edward");
// console.count("I am Edward");
// console.countReset("I am Edward");
// console.count("I am Edward");

// const function1 = () => console.trace();
// const function2 = () => function1();

// function2();

// const sum = () => console.log(`The sum of 2 and 3 is: ${2 + 3}`);
// const multiply = () => console.log(`The product of 2 and 3 is: ${2 * 3}`);
// const measureTime = () => {
//     console.time("sum()");
//     sum();
//     console.timeEnd("sum()");
//     console.time("multiply()");
//     multiply();
//     console.timeEnd("multiply()");
// }
// measureTime();

// code for progress bar
const ProgressBar = require("progress");

const bar = new ProgressBar("downloading [:bar] :rate/bps :percent :etas", {
    total:20,
});

const timer = setInterval(() => {
    bar.tick();
    if (bar.complete) {
        clearInterval(timer);
    }
}, 100);
const chalk = require("chalk");
console.log(chalk.blue("This is nodejs tutorial"));