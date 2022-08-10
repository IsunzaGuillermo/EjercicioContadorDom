



var valorContador = 0; //Iniciamos el contador en 0

function increment() {
    valorContador++; //incrementamos el valor del contador
    document.getElementById("contador").innerHTML = valorContador; //
}

function decrement() {
    valorContador--;
    document.getElementById("contador").innerHTML = valorContador;
}

function reset() {
    valorContador = 0;
    document.getElementById("contador").innerHTML = valorContador;
}

