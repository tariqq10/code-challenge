const prompt = require('prompt-sync')();


const speed = parseInt(prompt('Enter the speed of the car: '));

if (speed < 70) {
    console.log("Ok");
} else if (speed <= 75) {
    console.log("Points: 1");
} else if (speed <= 80) {
    console.log("Points: 2");
} else if (speed <= 85) {
    console.log("Points: 3");
} else if (speed <= 90) {
    console.log("Points: 4");
} else if (speed <= 95) {
    console.log("Points: 5");
} else if (speed <= 100) {
    console.log("Points: 6");
} else if (speed <= 105) {
    console.log("Points: 7");
} else if (speed <= 110) {
    console.log("Points: 8");
} else if (speed <= 115) {
    console.log("Points: 9");
} else if (speed <= 120) {
    console.log("Points: 10");
} else if (speed <= 125) {
    console.log("Points: 11");
} else if (speed <= 130) {
    console.log("Points: 12");
} else {
    console.log("License suspended");
}
