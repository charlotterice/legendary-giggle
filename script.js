function divide (a,b){
    var result = a / b;
    console.log(result);
    return result;
}

divide(6,7);

function isLarger(a,b){
    a>b ? console.log("a: ",a) : console.log("b: ",b);
}

var firstFraction = 1/4;
var secondFraction = 3/4;

isLarger(firstFraction,secondFraction);
isLarger(5/6,8/9);
isLarger(1/2,2/5);


function largerFraction(a,b){
    var result;
    a>b ? result = ["firstFraction",a] : result = ["secondFraction",b];
    return result;
}

var fractionResult = largerFraction(firstFraction,secondFraction);

console.log("First Fraction Result", firstFraction);
console.log("Second Fraction Result",secondFraction);
console.log("Fraction "+ fractionResult[0] + "with a value of " + fractionResult[1]+"is the largest!");