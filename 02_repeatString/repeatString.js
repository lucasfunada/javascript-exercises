const repeatString = function(str, repeats) {
    if (repeats < 0) {
        return "ERROR";
    }
    let newStr = "";
    for(let i = 0; i < repeats; i++) {
        newStr = newStr + str;
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
