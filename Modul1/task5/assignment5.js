let year = parseInt(prompt("Enter a year:"));

let isLeapYear;

isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if (isLeapYear) {
  document.write(`<h2>${year} is a leap year!</h2>`);
} else {
  document.write(`<h2>${year} is not a leap year.</h2>`);
}