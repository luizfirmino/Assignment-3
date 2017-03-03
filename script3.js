/*
The Basic Calculator (10 points)
In this part of the assignment you will build a simple calculator. You will ask the user for a number, a
second number, and then finally ask them what kind of operation they want to perform, either add,
subtract, multiply, or divide. Depending on what they select, you will perform that operation. To
complete this lab follow the steps outlined here:
*/

window.alert("Basic Calculator");

/*
1. Prompt the user for a number and store that in a variable.
*/
var number1;
do {
    number1 = parseFloat(window.prompt("Please, inform a number."));
} while (!(typeof(number1) == "number"))

/*
2. Prompt the user for a second number and store that in a variable.
*/
var number2;
do {
    number2 = parseFloat(window.prompt("Please, inform the second number."));
} while (!(typeof(number2) == "number"))

/*
3. Prompt the user for the operation they would like to perform (add, subtract, multiply, divide) and
store that in a variable.
*/
var perform = window.prompt("What would you like to perform?\n(+) add \n(-) subtraction \n(*) multiply \n(/) divide");

/*
4. Create a new named function called calculate() that accepts 3 parameters.
*/

function calculate(param1, param2, operator){
    
    switch(operator){
        case "+":
            return (param1 + param2);
            break;
        case "-":
            return (param1 - param2);
            break;
        case "*":
            return (param1 * param2);
            break;
        case "/":
            return (param1 / param2);
            break;    
    }
}

/*
5. Call the calculate function and pass in the 3 variables as parameters.
HINT: You will need to convert the 2 numbers from strings to numbers.
*/

window.alert("The result of: " + number1 + " " + perform + " " + number2 + " is " + calculate(number1, number2, perform));

/*
6. Within the calculate() function use a switch statement to evaluate the operation parameter being
passed in. Depending on what it is, perform that operation, and display the result within an alert
box.

7. Figure out how to make it so that if the user doesn’t enter either add, subtract, multiply, or divide,
they are displayed an alert message telling them that. Then you’ll have to rerun the application so
that the application asks the user for the numbers and operation once more.
*/