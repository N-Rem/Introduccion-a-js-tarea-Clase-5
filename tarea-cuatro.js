const $agregarListItem = document.querySelector("#boton-agregar-item");
const $realizarCalculos = document.querySelector("#realizar-calculos");
const $listaDeNumeros = document.querySelectorAll("li");
const NUMEROS_DE_LA_LISTA = [];

$agregarListItem.onclick = function () {
    const numeroParaLaLista = Number(document.querySelector("#agregar-numero").value);
    NUMEROS_DE_LA_LISTA.push(numeroParaLaLista);
    agregarListItem();
}

$realizarCalculos.onclick = function () {
    document.querySelector("#promedio").innerText = `El promedio es: ${calcularPromedio(NUMEROS_DE_LA_LISTA)}`;
    document.querySelector("#numero-menor").innerText = `El numero más Pequeño es: ${calcularElNumeroMenor(NUMEROS_DE_LA_LISTA)}`;
    document.querySelector("#numero-mayor").innerText = `El numero más Grande es: ${calcularElNumeroMayor(NUMEROS_DE_LA_LISTA)}`;
    document.querySelector("#numero-mas-frecuente").innerText = `El numero más Frecuente es: ${obtenerElNumeroMasRepetido(NUMEROS_DE_LA_LISTA)}`;
}

function agregarListItem() {
    let listItems = ""
    const $orderList = document.querySelector("#numeros");
    for (let i = 0; i < NUMEROS_DE_LA_LISTA.length; i++) {
        listItems += `<li>${NUMEROS_DE_LA_LISTA[i]}</li>`;
    }
    $orderList.innerHTML = listItems;
}

function calcularPromedio(numerosDeLaLista) {
    let sumaDeLosNumeros = 0
    for (let i = 0; i < numerosDeLaLista.length; i++) {
        sumaDeLosNumeros += numerosDeLaLista[i];
    }
    const promedio = sumaDeLosNumeros / numerosDeLaLista.length;
    return promedio;
}

function calcularElNumeroMenor(numerosDeLaLista) {
    let numeroMenor = 0
    for (let i = 0; i < numerosDeLaLista.length; i++) {
        if (numeroMenor > numerosDeLaLista[i]) {
            numeroMenor = numerosDeLaLista[i];
        }
    }
    return numeroMenor;
}

function calcularElNumeroMayor(numerosDeLaLista) {
    let numeroMayor = 0
    for (let i = 0; i < numerosDeLaLista.length; i++) {
        if (numeroMayor < numerosDeLaLista[i]) {
            numeroMayor = numerosDeLaLista[i];
        }
    }
    return numeroMayor;
}

function obtenerElNumeroMasRepetido(numerosDeLaLista) {
    numerosDeLaLista.sort
    let numerosSinRepetirse = [];
    let cantidadDeRepeticionPorNumeros = [];
    let contadorDeRepetidos = 1;
    let elNumeroMasRepetido = 0;
    for (let i = 0; i < numerosDeLaLista.length; i++) {
        if (numerosDeLaLista[i + 1] === numerosDeLaLista[i]) {
            contadorDeRepetidos++
        }
        else {
            numerosSinRepetirse.push(numerosDeLaLista[i]);
            cantidadDeRepeticionPorNumeros.push(contadorDeRepetidos);
            contadorDeRepetidos = 1;
        }
    }
    let index = cantidadDeRepeticionPorNumeros.findIndex(n => n === calcularElNumeroMayor(cantidadDeRepeticionPorNumeros));
    elNumeroMasRepetido = numerosSinRepetirse[index];
    return elNumeroMasRepetido;
}




