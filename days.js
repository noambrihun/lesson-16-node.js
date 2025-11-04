const dayjs = require("dayjs");

const birthDate = dayjs("2000-03-13");

console.log("Birth date:", birthDate.format("DD/MM/YYYY"));

const plus30 = birthDate.add(30, "day");
console.log("After 30 days:", plus30.format("DD/MM/YYYY"));

const now = dayjs(); 
const sameMonth = now.month() === plus30.month();

console.log("Are they in the same month?", sameMonth ? "Yes " : "No ");
