// Bubble sort (ordenamiento ascendente)
const array = [3, 6, 12, 5, 100, 1];
let num;  
for (let i = 0; i < array.length-1; i++) {
    for (let index = 0; index < array.length; index++) {
        if(array[index+1]<array[index])
        {
            num = array[index+1];
            array[index+1] = array[index];
            array[index] = num;
        }
    }
    
}
