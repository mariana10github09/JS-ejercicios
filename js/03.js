// desarrollar el algoritmo dado como dato el sueldo de un trabajador, le aplica
// un aumento del 15% si su sueldo es inferior a $300.000.


let sueldo = parseInt(prompt("ingrese su sueldo: "))
let aumento = (sueldo*0.15)+sueldo
if(sueldo<=300000)
{
    console.log("su sueldo es:", sueldo,"se le aplicara el aumento de 15% ")
    console.log("sueldo total:", aumento)
}
else{
    console.log("su sueldo es: ",sueldo)
}