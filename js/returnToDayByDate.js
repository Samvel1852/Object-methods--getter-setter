// Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as
// month/day/year,return the day-number of the year. All input strings in the tests are valid dates.

let monthObject = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};
// let daysCountsOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let daysCountsOfMonths = Object.entries(monthObject);
// console.log(daysCountsOfMonths);

function days(month, year) {
  //   console.log(new Date(year, month, 0));
  return new Date(year, month, 0).getDate();
}

function dayOfYear(date) {
  let resDay = 0;
  let dateByArr = date.split("/");
  let day = dateByArr[1];
  let month = dateByArr[0];
  let year = dateByArr[2];
  for (let i = 0; i < month; i += 1) {
    if (i === month - 1) {
      resDay += +day;
    } else {
      console.log(days(i, year), "orer");
      resDay += days(i, year);
    }
  }
  //   year = dateByArr[2];
  return resDay;
}

console.log(dayOfYear("1/9/2019"));
