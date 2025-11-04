const uuid = require('uuid');

const students = [
  { fullName: "Dana Levi", grade: 92 },
  { fullName: "Itay Cohen", grade: 81 },
]

const idStudents = students.map(student => {
  return { 
    ...student, 
    id: uuid.v4()
 };
});

console.log(idStudents);
