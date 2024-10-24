// desarrollar un programa que, dado una calificación de un alumno en un
// parcial, escribe aprobado si la calificación es superior a 3.


let calificacion = parseInt(prompt("ingresa tu calificacion"))

if (calificacion>3 ){
    console.log(" su calificacion es ",calificacion,", parcial aprobado.")
}
else{
    console.log(" su calificacion es ",calificacion,", parcial reprobado.")
}