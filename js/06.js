// Escriba el algoritmo que al capturar un numero entero convierta grados
// centígrados a kelvin, si captura un numero flotante diga si es mayor a 10.5,
// y si captura un carácter escriba su nombre.
let maximo = 10.5
let caracter=(prompt("ingrese un numero: "))


if(caracter%1==0){
   let conversion=caracter + 273.15
   console.log(caracter,'C° convertido a kelvin es igual a: ', conversion,'K' )
}
else{
   if(typeof caracter == Number && caracter%1!==0 && caracter>maximo ){
   console.log('el número es flotante')
   console.log('el número es mayor a 10.5')}

   else{
      if( typeof  caracter==Number && caracter  %1!==0 && caracter<maximo){
      console.log('el número es menor a 10.5')}
      else{
         if(typeof caracter<0){
         console.log('el caracter ingresado es: ', caracter)}

}
}}