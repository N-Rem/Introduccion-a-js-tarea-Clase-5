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



