
/*3.Write a JavaScript program to determine whether a given year is a leap year in the
Gregorian calendar*/

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true; // Divisible by 400 → Leap year
    } 
    if (year % 100 === 0) {
        return false; // Divisible by 100 but not 400 → Not a leap year
    } 
    return year % 4 === 0; // Divisible by 4 but not 100 → Leap year
}

// Example usage:
const year = 2024;
console.log(year + (isLeapYear(year) ? " is a leap year." : " is not a leap year."));
