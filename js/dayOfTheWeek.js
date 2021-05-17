// Write a function that, given a date (in the format MM/DD/YYYY),returns the day of the week as a string.
// Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday",
// "Thursday", "Friday", or "Saturday".

// let weekDayObj = {
//     0: "Sunday"
// }

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function returnWeekDay(date) {
  let dateObj = new Date(date);
  //   console.log(date);
  //   console.log(dateObj.getDay());
  return weekDays[dateObj.getDay(date)];
}

console.log(returnWeekDay("12/08/2011"));
