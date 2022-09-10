/*

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

*/
function calculate(parameter, value) {
    const result = parameter != undefined ? value + parameter : value;
    if (result.length == 3) {
        return Math.floor(eval(result));
    }
    return result;
}

function zero(parameter) { return calculate(parameter, '0') }
function one(parameter) { return calculate(parameter, '1') }
function two(parameter) { return calculate(parameter, '2') }
function three(parameter) { return calculate(parameter, '3') }
function four(parameter) { return calculate(parameter, '4') }
function five(parameter) { return calculate(parameter, '5') }
function six(parameter) { return calculate(parameter, '6') }
function seven(parameter) { return calculate(parameter, '7') }
function eight(parameter) { return calculate(parameter, '8') }
function nine(parameter) { return calculate(parameter, '9') }

function plus(parameter) { return calculate(parameter, '+') }
function minus(parameter) { return calculate(parameter, '-') }
function times(parameter) { return calculate(parameter, '*') }
function dividedBy(parameter) { return calculate(parameter, '/') }