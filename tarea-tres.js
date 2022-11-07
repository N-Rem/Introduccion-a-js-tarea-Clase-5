const $botonCalcularTiempo = document.querySelector("#calcular-tiempo-total");
const $botonAgregarClases = document.querySelector("#agregar-clases");

$botonAgregarClases.onclick = function () {
    const numeroClases = Number(document.querySelector("#numero-clases").value);
    if (numeroClases > 0 && numeroClases <= 25) {
        agregarNuevoFormulario(numeroClases);
    }
    else {
        alert("El numero de clases no existe. Solo del 1 al 25");
        return false;
    }
}

function agregarNuevoFormulario(numeroClases) {
    const $formulario = document.querySelector("#formulario");
    $formulario.innerHTML = ``;
    for (let i = 1; i <= numeroClases; i++) {
        $formulario.innerHTML += `<form id="clase-${i}">
    <h3 class="clase">Clase ${i}</h3>
    <label for="horas">horas</label>
    <input type="number" name="horas" id="horas-clase${i}">
    <label for="minutos">minutos</label>
    <input type="number" name="minutos" id="minutos-clase${i}">
    <label for="segundos">segundos</label>
    <input type="number" name="segundos" id="segundos-clase${i}">
    </form> <br/>`;
    }

}



$botonCalcularTiempo.onclick = function () {
    const numeroDeClases = Number(document.querySelector("#numero-clases").value);
    const $resultadoFinal = document.querySelector("#tiempo-total");
    document.querySelector("#contenedor-resultado").classList.add("resultado-final");
    let horasTotales = 0;
    let minutosTotales = 0;
    let segundosTotales = 0;
    for (let i = 1; i <= numeroDeClases; i++) {
        horasTotales += Number(document.querySelector(`#horas-clase${i}`).value);
        minutosTotales += Number(document.querySelector(`#minutos-clase${i}`).value);
        segundosTotales += Number(document.querySelector(`#segundos-clase${i}`).value);

    }
    $resultadoFinal.innerText = prepararImprecionResultado(horasTotales, minutosTotales, segundosTotales);
}

function prepararImprecionResultado(horas, minutos, segundos) {
    const SEG_MIN_EN_UN_MIN_SEG = 60;
    let segundosFinales = 0;
    let minutosFinales = 0;
    let horasFinales = 0;


    if (segundos < SEG_MIN_EN_UN_MIN_SEG) {
        segundosFinales += segundos
    }
    else if (segundos % SEG_MIN_EN_UN_MIN_SEG === 0) {
        minutosFinales += (segundos / SEG_MIN_EN_UN_MIN_SEG);
    }
    else {
        segundosFinales += (segundos % SEG_MIN_EN_UN_MIN_SEG)
        minutosFinales += ((segundos - segundosFinales) / SEG_MIN_EN_UN_MIN_SEG);
    }


    if (minutos < SEG_MIN_EN_UN_MIN_SEG) {
        minutosFinales += minutos;
    }
    else if (minutos % SEG_MIN_EN_UN_MIN_SEG === 0) {
        horasFinales += (minutos / SEG_MIN_EN_UN_MIN_SEG);
    }
    else {
        minutosFinales += (minutos % SEG_MIN_EN_UN_MIN_SEG);
        horasFinales += ((minutos - (minutos % SEG_MIN_EN_UN_MIN_SEG)) / SEG_MIN_EN_UN_MIN_SEG)
    }


    if (minutosFinales > SEG_MIN_EN_UN_MIN_SEG) {
        minutosFinales = (minutosFinales % SEG_MIN_EN_UN_MIN_SEG)
        horasFinales += ((minutosFinales - (minutosFinales % SEG_MIN_EN_UN_MIN_SEG)) / SEG_MIN_EN_UN_MIN_SEG)
    }
    horasFinales += horas;

    return `El timepo total de los cursos es ${horasFinales} horas, ${minutosFinales} minutos, ${segundosFinales} segundos`;
}



