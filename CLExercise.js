const getInputValue = () => document.getElementById("user-input").value;


document.createElement()
function handleEstaciones(mes){
    switch (mes) {
        case 12: case 1: case 2:
            console.log("Invierno");
            break;
        case 3: case 4: case 5:
            console.log("Primavera");
            break;  
    
        case 6: case 7: case 8:
            console.log("Verano");
            break;
            
        case 9: case 10: case 11:
            console.log("Otoño");
            break;
    
        default:
            break;
    }
}

function getEstacion(){
    if(getInputValue() != null && getInputValue()>0){
        handleEstaciones(parseInt(getInputValue()));
    }
}

// Esta es la instrucción "Iterar con un ciclo for el arreglo nombre y agregar a cada nombre
// un <li>${nombrepersona}</li>
// Crear un nuevo arreglo con cada elemento modificado"