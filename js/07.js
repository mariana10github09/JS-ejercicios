// Desarrolle un algoritmo que lea de un registro: el nombre, la edad, el sexo,
// el estado civil de cualquier persona e imprima el nombre de la persona, si
// corresponde a un hombre casado mayor de 40 años o a una mujer soltera
// menor de 50 años.

let nombre= prompt('ingrese su nombre :')
let edad = parseInt(prompt('ingrese su edad: '))
let sexo = prompt('ingrese su sexo (hombre= m /mujer= f): ')
let estado_civil = prompt('ingrese su estado civil (casado= c /soltero= s): ')



if( sexo=='m' && edad>=40 && estado_civil== 'c'){
   console.log(nombre, "cumple con los requisitos")
}  
if(sexo=='f' && edad<=50 && estado_civil=='s'){
   console.log(nombre, "cumple con los requisitos")
}
else{
   console.log(nombre, "no cumple con los requisitos")
}
