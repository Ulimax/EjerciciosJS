let arr = ["This", "is", "a", "sentence."];
const printOutString =()=> arr.join(" ");
const cuerpo = document.querySelector('body');
const cabecera = document.createElement('p');
cabecera.innerHTML = `Resultado 1: ${printOutString()}`;
cuerpo.appendChild(cabecera);


function myFunction(x) {
    x.classList.toggle("change");
  }