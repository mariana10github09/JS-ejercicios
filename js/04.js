// desarrollar un algoritmo que asigne el sueldo a cinco empleados, teniendo
// en cuenta su categoría.

let categoria1 = 1000
let categoria2 = 2000
let categoria3 = 3000
let categoria4= 4000
let categoria
let i = parseInt(prompt("ingrese el numero de empleados"))


for (let j = 0; j < i; j++)

    {
        let categoria= parseInt(prompt("ingrese el numero de su categoria (1, 2, 3 o 4 ): "))
        if (categoria==1)
           {
           console.log("su sueldo es: ", categoria1)
        }
        else{
        if (categoria==2){
           console.log("su sueldo es: ", categoria2)
        }
        else{
        if (categoria==3)
           {
           console.log("su sueldo es: ", categoria3)
        }
        else{
           if (categoria==4){
              console.log("su sueldo es de:" ,categoria4)
           }
           else{
              console.log("categoria no valida")
           }
           
        }}}
     }
     
     
     
