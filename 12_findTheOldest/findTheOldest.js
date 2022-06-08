/**
 * Finds the oldest person, this function doesn't return multiple people when multiple are the same age
 * @param {object} people is an array of objects
 * @returns the oldest object
 */
const findTheOldest = function(people) {
    const oldest = people.reduce((p1, p2) => {
        //  Check for year of death, use current year if year of death is not found
        if(p1.yearOfDeath === undefined)
            p1.yearOfDeath = (new Date()).getFullYear();
        // Calculate ages and return the older one
        age1 = p1.yearOfDeath - p1.yearOfBirth;
        age2 = p2.yearOfDeath - p2.yearOfBirth;
        return age1 > age2 ? p1 : p2;
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
