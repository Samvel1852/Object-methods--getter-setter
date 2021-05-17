// The function should produce the same output even if dateStart is greater than dateEnd
// let data = new Date(1998, 02, 10);
// let year = data.getFullYear();
// let months = data.getMonth();

// console.log(data);
// console.log(year);
// console.log(months);

let start = new Date(2017, 11, 1);
// let monthJanuary = january2018.getMonth();
let end = new Date(2018, 1, 1);
// console.log(end);
// let monthMarch = march2019.getMonth();

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function monthsInterval(startMonth, endMonth) {
  let resMonths = [];
  let yearsDifference = endMonth.getFullYear() - startMonth.getFullYear();
  let monthsDifference = endMonth.getMonth() - startMonth.getMonth();
  //   console.log(yearsDifference);
  if (yearsDifference !== 0) {
    for (let i = 0; i <= yearsDifference; i += 1) {
      if (startMonth.getMonth() !== 0 && i === 0) {
        resMonths.push(...months.slice(startMonth.getMonth()));
      } else if (endMonth.getMonth() !== 0 && i === yearsDifference) {
        resMonths.push(...months.slice(0, endMonth.getMonth()));
      } else {
        resMonths.push(...months);
      }
    }
  } else {
    resMonths.push(...months.slice(startMonth.getMonth(), endMonth.getMonth()));
  }
  return resMonths;
}

console.log(monthsInterval(start, end));
