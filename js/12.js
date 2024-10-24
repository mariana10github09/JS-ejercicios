// 12.Un vendedor desea calcular su comisión total sobre las ventas de varios
// artículos. Al vendedor le corresponde el 3% de comisión sobre artículos
// cuyo precio es menor de $2.000.oo y el 5% de comisión sobre artículos
// cuyo precio es de $2000.oo o más. El vendedor hizo 50 ventas y desea
// saber también cuántas ventas hizo menores de 2000 y cuantas mayores o
// iguales a 2000.


//se desea coocer la comision a partir de la venta de 50 articulos,


// Inicializar variables
let comisionTotal = 0;
let contadorMenores2000 = 0;
let contadorMayores2000 = 0;
let ventas = [];
for (let i = 0; i < 50; i++) {
  
    let venta = parseInt(prompt("Ingresa el valor de la venta #" + (i + 1) + ":"));
    
    // Validar que la entrada sea un número válido
    if (!isNaN(venta)) {
        ventas.push(venta);

        if (venta < 2000) {
            let comision = venta * 0.03;
            comisionTotal += comision;
            contadorMenores2000++;
        } else {
            let comision = venta * 0.05;
            comisionTotal += comision;
            contadorMayores2000++;
        }
    } else {
        console.log("Por favor ingresa un número válido para la venta.");
        i--; 
    }
}
console.log("Comisión total: $" + comisionTotal.toFixed(2));
console.log("Ventas menores de $2000: " + contadorMenores2000);
console.log("Ventas mayores o iguales a $2000: " + contadorMayores2000);
