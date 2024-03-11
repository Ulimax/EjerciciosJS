let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
const result = student2Courses.filter((word) => student1Courses.includes(word))
console.log(result);