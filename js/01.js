// Desarrolle un algoritmo que lea un número, en caso de ser negativo lo
// imprima junto con su positivo.

let numero = parseInt(prompt("ingrese un numero positivo o negativo"))

if (numero<0){
    let operacion = numero *-1

    console.log("numero negativo",numero,"su numero positivo es:", operacion)
}
else
{
    console.log(numero)
}
