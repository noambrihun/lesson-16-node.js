const {v4:uuid}= require('uuid');

const students = [
  { fullName: "Dana   Levi", grade: 92 },
  { fullName: "Itay Cohen", grade: 81 },
]
 
const idStudents = students.map((student,index) => {
  return { 
    ...student, 
    id: uuid()
 };
});

console.log(idStudents);


