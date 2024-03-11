let arr = ["This", "is", "a", "sentence."];
const printOutString =()=> arr.join(" ");
const cuerpo = document.querySelector('body');
const cabecera = document.createElement('h1');
cabecera.innerHTML = `${printOutString()}`;
cuerpo.appendChild(cabecera);


function myFunction(x) {
    x.classList.toggle("change");
  }