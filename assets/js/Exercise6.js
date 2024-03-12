// Bubble sort (ordenamiento ascendente)
const array2 = [3, 6, 12, 5, 100, 1];
const resultado = 'Resultado 6';
const cabecera6 = document.createElement('p');
const contenedor = document.createElement('div');
cuerpo.appendChild(contenedor);
contenedor.innerHTML = `<p> Resultado 6: </p>`;


let num;  
for (let i = 0; i < array2.length-1; i++) {
    for (let index = 0; index < array2.length; index++) {
        if(array2[index+1]<array2[index])
        {
            num = array2[index+1];
            array2[index+1] = array2[index];
            array2[index] = num;
        }
    }
    cabecera6.innerHTML += `${array2} <br>` ;
    
}




cuerpo.appendChild(cabecera6);
