// desarrollar un programa que capture tres números e imprima por pantalla
// cual es el número mayor, el menor, cuales son iguales, si los tres
// diferentes.

let num1 = parseInt(prompt("dijite el primer valor"))
let num2 = parseInt(prompt("dijite el segundo valor"))
let num3 = parseInt(prompt("dijite el tercer valor"))

console.log("numeros dados:", num1,num2,num3)
if (num1 > num2  && num1 >num3 ){
   console.log("el numero mayor es:" , num1 )
}
else{
   if(num2>num3 && num2> num1)
   console.log("el numero mayor es:" , num2)
else{
   console.log("el numero mayor es:" , num3)
}
}

if (num1 <= num2  && num1 <=num3 ){
   console.log("el numero menor es:" , num1 )
}
else{
   if(num2<=num3 && num2<= num1)
   console.log("el numero menor es:" , num2)
else{
   if(num3<=num1 && num3<=num2)
   console.log("el numero menor es:" , num3)
}
}



if (num1 == num2 ){
   console.log(num2 ,"y" , num1, "son numeros iguales" )
}
else{
   if(num1 == num3 ){
      console.log(num3 ,"y" , num1, "son numeros iguales" )
   }
else{
   if(num2 == num3){
   console.log(num2 ,"y" , num3, "son numeros iguales" )
}
else
{
   console.log("los tres numeros son diferentes")
}
}}