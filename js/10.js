//A ciertos estudiantes se les dice que su calificación final será el promedio
// de las dos calificaciones más altas de entre las tres que se han obtenido en
// el curso. Haga un algoritmo que permita a un estudiante efectuar el cálculo
// correspondiente a su nota final.

let nota1=parseInt(prompt("ingrese la primera nota: "))
let nota2=parseInt(prompt("ingrese la segunda nota: "))
let nota3=parseInt(prompt("ingrese la tercera nota: "))

    
if(nota1<nota2 && nota1<nota3){
    let promedio= (nota2+nota3)/2
    console.log("el promedio de el estudiante es de: ", promedio)}
   else{
    if(nota2<nota1 && nota2<nota3){
         promedio= (nota1+nota3)/2
        console.log("el promedio de el estudiante es de: ", promedio)
    
   }
   else{
    promedio= (nota2+nota1)/2
    console.log("el promedio de el estudiante es de: ", promedio)
    
   }
}