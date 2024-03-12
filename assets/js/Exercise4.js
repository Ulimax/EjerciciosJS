let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
const result = student2Courses.filter((word) => student1Courses.includes(word))


const cabecera4 = document.createElement('p');
cabecera4.innerHTML = `Resultado 4: ${result}`;
cuerpo.appendChild(cabecera4);