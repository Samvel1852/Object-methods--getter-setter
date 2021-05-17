// The input is object, which keys are student's names and values are array of their scores. Find the
// student with the best average score.

let studentObject = {
  John: [100, 90, 80],
  Bob: [100, 70, 80],
};

function getBestStudent(object) {
  let resStud = 0;
  let resName = "";
  for (let student in object) {
    // console.log(object[student]);
    let avg =
      object[student].reduce((acc, score) => acc + score) /
      object[student].length;
    object[student].push([avg]);
    if (avg > resStud) {
      resStud = avg;
      resName = student;
    }
  }
  //   object.sort((a, b) => (a[a.length - 1] < b[b.length - 1] ? 1 : -1));

  return resName;
}

console.log(getBestStudent(studentObject));
