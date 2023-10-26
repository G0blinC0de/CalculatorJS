/*
const number1 = prompt("Enter a number:");
const number2 = prompt("Enter another number:");


function add(number1, number2){
  return parseInt(number1) + parseInt(number2);
}

function subtract(number1, number2) {
    return parseInt(number1) - parseInt(number2);
}

function multiply(number1, number2){
    return parseInt(number1) * parseInt(number2);
}

function divide(number1, number2){
    let result = parseInt(number1) / parseInt(number2);
    return result.toFixed(2);
}

window.alert(number1 + " + " + number2 + " = " + add(number1, number2) + ", " + number1 + " - " + number2 + " = " + subtract(number1, number2) + ", " + number1 + " * " + number2 + " = " + multiply(number1, number2) + ", " + number1 + " / " + number2 + " = " + divide(number1, number2));

//Temperature
/*
const temp = prompt("Enter today's temperature in Fahreneit:"); 


function conversion(temp) {
    return (temp - 32) * 5 / 9;
};

window.alert("Today's temperature in Celcius is: " + conversion(temp));
*/

//Cooking
const ounces = prompt("Enter weight in ounces: ");
const pounds = prompt("Enter weight in pounds: ");

function weedMeasurement(ounces, pounds) {
    let ouncesToGrams = (ounces * 28.349523).toFixed(2);
    let poundsToGrams = (pounds * 453.592).toFixed(2);
    return "Your weight in ounces is equal to " + ouncesToGrams  + " grams. \nYour weight in pounds is equal to " + poundsToGrams + " grams.";
}

window.alert(weedMeasurement(ounces, pounds));