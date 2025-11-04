const zodjs = require("zod");
const arr = [
  { fullName: "Dana Levi", grade: 92 },
  { fullName: "It", grade: 120 },    
];


for (let i = 0; i < arr.length; i++) {
  const student = arr[i];
  const name = student.fullName;
  const grade = student.grade;

  if (name.length >= 3 && name.length <= 25 && grade >= 0 && grade <= 100) {
    console.log("okay :", name, grade);
  } else {
    console.log(" not okay", name, grade);
  }
}

console.log(zodjs);

