// Implement following function

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

function formatDate(date) {
  let year = date.getFullYear();
  let month = months[date.getMonth()];
  let day = date.getDate();
  //   console.log(day);
  //   console.log(months[month]);
  //   console.log(year);
  //   let resDate =
  return day + " " + month + " " + year;
}

console.log(formatDate(new Date("2020-05-14")));
