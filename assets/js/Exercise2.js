const array = [1, 2, 4, 5];
function doubleNumber(number){
    return number*2;
}



const cabecera2 = document.createElement('p');
cabecera2.innerHTML = `Resultado 2: ${array.map(doubleNumber)}`;
cuerpo.appendChild(cabecera2);
