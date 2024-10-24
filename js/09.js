// 9. Dados tres números enteros únicos, a, b y c. Elabore un algoritmo que los
// ordene de mayor a menor e imprímalos.


let num1 = parseInt(prompt('Ingrese un primer número único: '))
let num2 = parseInt(prompt('Ingrese un segundo número único: '))
let num3 = parseInt(prompt('Ingrese un tercer número único: '))

   // num2 es el menorr      - num3 es el mayor -  num1 el de el medio
if (num2<=num1 && num2<=num3 && num3>=num2 && num3>=num1)
   {
      console.log('ordenando los numeros de mayor a menor quedarian de la siguiente forma: ', num2,num1,num3)
   }
else{ // num1 es el menorr      - num3 es el mayor -  num2 el de el medio
if(num1<=num2 && num1<=num3 && num3>=num2 && num3>=num1)
   {
      console.log('ordenando los numeros de mayor a menor quedarian de la siguiente forma: ',num1,num2, num3) }
else{ // num2 es el menorr      - num1 es el mayor -  num3 el de el medio
if(num2<=num3 && num2<=num1 && num1>=num3 && num1>=num2){
      console.log('ordenando los numeros de mayor a menor quedarian de la siguiente forma: ',num2, num3,num1)
}
else{ // num3 es el menor      -num2 es el mayor -  num1 el de el medio
   if(num2>num3 && num2>num1 && num3<num1 && num3<num2)
   console.log('ordenando los numeros de mayor a menor quedarian de la siguiente forma: ',num3, num1, num2)
else{// num1 es el menor      -num2 es el mayor -  num3 el de el medio
} if(num1<num2 && num1<num3 && num2>num3 && num2>num1)
   {console.log('ordenando los numeros de mayor a menor quedarian de la siguiente forma: ',num1, num3,num2)}

   else{
      if(num3<num2 && num3< num1 && num1>num2 && num1>num3)
         {console.log('ordenando los numeros de mayor a menor quedarian de la siguiente forma: ',num3, num2,num1)}

}
}
}}

