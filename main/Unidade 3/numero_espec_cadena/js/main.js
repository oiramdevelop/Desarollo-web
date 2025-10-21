function extraerCaracter(texto , cantidad){
    return texto.substring(0,cantidad)
}
let pedir_Cantidad = parseInt(prompt("Introduce la cantidad de caracteres que quieres extraer "))
let pedir_texto =prompt("Introduce el texto que quieres extraer")
let resultado = extraerCaracter(pedir_texto,pedir_Cantidad)
document.getElementById("resultado").innerHTML = resultado

