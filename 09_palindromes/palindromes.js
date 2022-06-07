const { truncate } = require("fs/promises");

const regex = /[\W_]/g;
/**
 * Splices string and checks for palindrome using for loop
 * @param {string} string to be spliced
 * @returns true or false
 */
const palindromesForLoop = function (string) {
    // Need to splice out white spaces and puncutation.  Covert all letters to same casing. 
    const str = string.replace(regex, '').toLowerCase();

    for(let i = 0; i < str.length/2; i++){
        if(str[i] != str[str.length - 1 - i])
            return false;
    }
    return true;
};

/**
 * Splices string and checks for palindrome using built in functions
 * @param {string} string string to be spliced
 * @returns true or false
 */
const palindromes = function(string){
    const regStr = string.toLowerCase().replace(regex, '');
    const reverseStr = regStr.split('').reverse().join('');
    return regStr === reverseStr;
}

// Do not edit below this line
module.exports = palindromes;
