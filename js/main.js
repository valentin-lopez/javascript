let numeroIngresado = prompt("Ingrese un numero:");
numeroIngresado = Number(numeroIngresado);

if (numeroIngresado > 0) {
    console.log(`Numeros pares hasta ${numeroIngresado}`);
    for (let i = 1; i <= numeroIngresado; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
} else {
    console.log("El numero ingresado debe ser positivo y distinto de cero")
}