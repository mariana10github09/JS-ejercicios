// 17.desarrollar el algoritmo que lea tres números y diga si uno es divisible del
// otro.

let numero1 = parseInt(prompt("ingrese primer numero"))
let numero2 = parseInt(prompt("ingrese segundo numero"))
let numero3 = parseInt(prompt("ingrese tercer numero"))

// if(numero1%numero2===0 && numero1%numero3===0)
// {
//     console.log(numero1, "es  dvisible de", numero2 ,"y ",numero3)}
//     else{
//         console.log(numero2, "no es  dvisible de", numero1, "ni",numero3)}
    
//  if(numero2%numero1===0 && numero2%numero3===0){
//      console.log(numero2, "es  dvisible de", numero1, "y de",numero3)}
//      else{
//         console.log(numero2, "no es  dvisible de", numero1, "ni",numero3)}

   
//      if(numero3%numero1===0 && numero3%numero2===0){
//             console.log(numero3, "es  dvisible de", numero1, "y de",numero3)}
//             else{
//                console.log(numero3, "no es  dvisible de", numero1, "ni",numero2)}
       
    
 if(numero1%numero2===0) 
{ console.log(numero1, "es dvisible por", numero2)}
    else{
        console.log(numero1, " no es dvisible por", numero2)}
    
 if(numero1%numero3===0) {
     console.log(numero1, "es  dvisible por", numero3)}
     else{
        console.log(numero1, "no es  dvisible por", numero3)}

   
 if(numero2%numero1===0) {
            console.log(numero2, "es  dvisible por", numero1)}
            else{
               console.log(numero2, "no es  dvisible por", numero1)}
 if(numero2%numero3===0) 
    {
        console.log(numero2,"es divisible por", numero3)
    }
    else{
    console.log(numero2,"no es divisible por", numero3)
    }
if(numero3%numero1===0)
{console.log(numero3,"es divisible por", numero1)}
    else{
    console.log(numero3," no es divisible por", numero1)
}
        
if(numero3%numero2===0)
{console.log(numero3,"es divisible por", numero2)}
    else{
    console.log(numero3," no es divisible por", numero2)
}

    



        
    


