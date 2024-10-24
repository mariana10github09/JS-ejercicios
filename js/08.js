// 8. Prepare un algoritmo que identifique e imprima el número medio de un
// conjunto de tres números únicos. El número medio es aquel que no es el
// menor ni el mayor.


let num1 = parseInt(prompt('Ingrese un primer número único: '))
let num2 = parseInt(prompt('Ingrese un segundo número único: '))
let num3 = parseInt(prompt('Ingrese un tercer número único: '))

if (num2<num1 && num2<num3 && num3>num2 && num3>num1)
    {
        console.log("el número del medio es el: " , num1)
    }
else{
if(num1<num2 && num1<num3 && num3>num2 && num3>num1)
    {
        console.log("el número del medio es el: " , num2)    
    }
else{
        console.log("el número del medio es: ", num3)
    }
}
