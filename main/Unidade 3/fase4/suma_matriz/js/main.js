var num1 = parseInt(prompt("Introduce un numero"))
var num2 = parseInt(prompt("Introduce un numero"))
var num3 = parseInt(prompt("Introduce un numero"))
var num4 = parseInt(prompt("Introduce un numero"))
var num5 = parseInt(prompt("Introduce un numero"))
var num6 = parseInt(prompt("Introduce un numero"))
var num7 = parseInt(prompt("Introduce un numero"))
var num8 = parseInt(prompt("Introduce un numero"))
var num9 = parseInt(prompt("Introduce un numero"))

var matriz=[num1,num2]

function sumarMatriz(array ){

    sumaTotal =0;
    for( i =0 ; i < array.length ; i++ ){
        sumaTotal +=array[i];
        
    }
    return sumaTotal

}


let resultado = sumarMatriz(matriz);

console.log(resultado)



