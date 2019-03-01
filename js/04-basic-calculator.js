/*eslint-env browser*/
var userNumb1;
var userNumb2;
var userChoiceOperation;

function welcome() {
    "use strict";
    window.alert("Welcome to the online calculator application");
    userNumb1 = Number(window.prompt("Please enter in the first number to calculate."));
    userNumb2 = Number(window.prompt("Please enter in the second number to calculate."));
    userChoiceOperation = window.prompt("Enter in what kind of operation you would like to perform with those two numbers. Example: +, -, *, or / .");
}

welcome();

var operation;

function calculate(numb1, numb2, userChoiceOperation) {
    "use strict";
    switch (userChoiceOperation) {
    case "+":
        operation = userNumb1 + userNumb2;
        window.alert(operation);
        break;
    case "-":
        operation = userNumb1 - userNumb2;
        window.alert(operation);
        break;
    case "*":
        operation = userNumb1 * userNumb2;
        window.alert(operation);
        break;
    case "/":
        operation = userNumb1 / userNumb2;
        window.alert(operation);
        break;
    default:
        window.alert("Invalid entries. Please enter in two integers and operation of choice.");  
        welcome();   
    }
    
}
calculate(userNumb1, userNumb2, userChoiceOperation);

