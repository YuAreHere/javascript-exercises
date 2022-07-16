const repeatString = function(repeater, num) {

let repeatedString = "";

if (num < 0) {
    return "ERROR";
}

while (num > 0) {

repeatedString += repeater;
num--;
}
return repeatedString;
};



// Do not edit below this line
module.exports = repeatString;
