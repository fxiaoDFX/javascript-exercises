const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	return array.reduce((x , y) => x + y, 0);
};

const multiply = function(array) {
  return array.reduce((x, y) => x * y);
};

const power = function(x, y) {
  if(y < 0)
    return -1;
	return y === 0 ? 1 : x * power(x, y - 1); 
};

const factorial = function(x) {
	return x <= 1 ? 1 : x * factorial(x - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
