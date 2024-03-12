function sumNumberArray(numbers){
    let total=0;
    numbers.forEach(number => {
        total +=number;
    });
    return total;
}
function multiNumberArray(numbers){
    let total=1;
    numbers.forEach(number => {
        total *=number;
    });
    return total;
}


function imprimirResultados(numbers){
    let sumTotal = sumNumberArray(numbers);
    let mulTotal = multiNumberArray(numbers);

    return `El resultado de la suma de los numeros del arreglo
                 [1,2,3,4] es: ${sumTotal} El resultado de la multiplicaición de los numeros del arreglo
                 [1,2,3,4] es: ${mulTotal}`
}


const cabecera3 = document.createElement('p');
cabecera3.innerHTML = `Resultado 3: ${imprimirResultados([1,2,3,4])}`;
cuerpo.appendChild(cabecera3);
