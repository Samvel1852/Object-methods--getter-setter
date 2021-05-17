// write a function which will return which th week

function getWeekOfMonth(date) {
  let adjustedDate = date.getDate() + date.getDay();
  //   console.log(date.getDate(), date.getDay());
  //   console.log(0 | (adjustedDate / 7), adjustedDate / 7);
  let prefixes = ["0", "1", "2", "3", "4", "5"];
  return parseInt(prefixes[Math.floor(adjustedDate / 7)]) + 1;
}

console.log(getWeekOfMonth(new Date(2021, 05, 1)));
