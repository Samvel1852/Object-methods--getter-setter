// The function should produce the same output even if dateStart is greater than dateEnd
// let data = new Date(1998, 02, 10);
// let year = data.getFullYear();
// let months = data.getMonth();

// console.log(data);
// console.log(year);
// console.log(months);

let january2018 = new Date(2017, 11, 1);
// let monthJanuary = january2018.getMonth();
let march2019 = new Date(2018, 1, 1);
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
        resMonths.push(...months.slice(startMonth.getMonth() - 1));
      } else if (endMonth.getMonth() !== 0 && i === yearsDifference) {
        resMonths.push(...months.slice(0, endMonth.getMonth() + 1));
      } else {
        resMonths.push(...months);
      }
    }
  }
  return resMonths;
}

console.log(monthsInterval(january2018, march2019));
