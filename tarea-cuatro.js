const NUMEROS_DE_LA_LISTA = [];

const $agregarListItem = document.querySelector("#boton-agregar-item");

$agregarListItem.onclick = function () {
    const numeroParaLaLista = Number(document.querySelector("#agregar-numero").value);
    NUMEROS_DE_LA_LISTA.push(numeroParaLaLista);
    console.log (NUMEROS_DE_LA_LISTA);
    agregarListItem();
}
function agregarListItem() {
    let listItems = ""
    const $orderList = document.querySelector("#numeros");
    for (let i = 0; i < NUMEROS_DE_LA_LISTA.length; i++) {
        listItems += `<li>${NUMEROS_DE_LA_LISTA[i]}</li>`;
    }
    $orderList.innerHTML = listItems;
}



