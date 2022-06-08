// Recursive formula for fibonacci sequence is a_1 = 1, a_2 = 1 and a_n = a_n-2 + a_n-1 for n >= 3.  Can use recursion to calculate fibonacci sequence.   

const fibonacci = function(x) {
    // covert strings of numbers to Number type
    const number = Number(x);
    if(number < 0){
        return "OOPS";
    }
    if(number <= 1)
        return number;
    return fibonacci(number - 2) + fibonacci(number - 1);
};

//console.log(fibonacci("11"))

// Do not edit below this line
module.exports = fibonacci;
