/* 
    Receive min and max as arguments
    Check if it's an integer, otherwise return "ERROR"
    for loop from min to max, incrementing i++
    inside the loop, sum i into the result.
    return the result
*/

const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    } else if (min < 0 || max < 0) {
        return "ERROR";
    }
    let result = 0;
    if (min < max) {
        for (let i = min; i <= max; i++) {
            result += i;
        }
    }
    else if (min > max) {
        for (let i = min; i >= max; i--) {
            result += i;
        }
    }
    else if (min === max) {
        result = min;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
