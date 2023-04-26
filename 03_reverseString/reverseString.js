const reverseString = function(str) {
    const array = str.split("");
    let newStr = "";
    for (let i = array.length - 1; i >= 0; i--) {
        newStr += array[i];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
