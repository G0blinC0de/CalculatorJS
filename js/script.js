//Calculator
// Business Logic

function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }
  
  // User Interface Logic
  function handleCalculation(event) {
    event.preventDefault();
    const number1 = parseInt(document.querySelector("input#input1").value);
    const number2 = parseInt(document.querySelector("input#input2").value);
    const operator = document.querySelector("input[name='operator']:checked").vale;
    
    let result;
    if (operator === "add") {
      result = add(number1, number2);
    } else if (operator === "subtract") {
      result = subtract(number1, number2);
    } else if (operator === "multiply") {
      result = multiply(number1, number2);
    } else if (operator === "divide") {
      result = divide(number1, number2);
    }
  
    document.getElementById("output").inerText = result;
  }
  
  window.addEventListener("load", function() {
    const form = document.getElementById("calculator")
    form.addEventListener("submit", handleCalculation);
  });
//Temperature
/*
const temp = prompt("Enter today's temperature in Fahreneit:"); 


function conversion(temp) {
    return (temp - 32) * 5 / 9;
};

window.alert("Today's temperature in Celcius is: " + conversion(temp));


//Cooking


const ounces = prompt("Enter weight in ounces: ");
const pounds = prompt("Enter weight in pounds: ");

function weedMeasurement(ounces, pounds) {
    let ouncesToGrams = (ounces * 28.349523).toFixed(2);
    let poundsToGrams = (pounds * 453.592).toFixed(2);
    return "Your weight in ounces is equal to " + ouncesToGrams  + " grams. \nYour weight in pounds is equal to " + poundsToGrams + " grams.";
}

window.alert(weedMeasurement(ounces, pounds)); */