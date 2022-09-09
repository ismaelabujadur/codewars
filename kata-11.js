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