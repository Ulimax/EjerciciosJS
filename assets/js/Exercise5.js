let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

people.forEach(person => {
    console.log(person);
});


console.log(people); 

people.splice(people.indexOf("Dani"), 1);

console.log(people); // Imprimiendo lista sin dani

people.splice(people.indexOf("Juan"), 1);

console.log(people); // Imprimiendo lista sin Juan


people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);

console.log(people); // Imprimiendo lista con luis al inicio

for (let index = 0; index < people.length; index++) {
    console.log(people[index]);
    if(people[index] === 'Maria'){
        break;
    } 
}

console.log(people.indexOf('Maria'));