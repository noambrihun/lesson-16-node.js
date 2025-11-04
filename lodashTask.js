const _ = require("lodash");

const grades = [92, 81, 100, 74, 88, 95];
const avg = grades.reduce((sum, num) => sum + num, 0) / grades.length;
console.log(avg);

const max = Math.max(...grades);
console.log(max); 

const min = Math.min(...grades);
console.log(min);

const round = grades.map((grade) => _.round(grade / 10) * 10);
console.log(round);