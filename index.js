// code your solution here
function saturdayFun(someValue = "roller-skate") {
    return "This Saturday, I want to " + someValue + "!";
}

saturdayFun();

function mondayWork(someValue = "go to the office") {
    return "This Monday, I will " + someValue + ".";
}

mondayWork();

function wrapAdjective(someValue) {
    return function (innerParameter = "special") {
        return `You are ${someValue}${innerParameter}${someValue}!`;
    };
}

wrapAdjective("%")("a dedicated programmer");
