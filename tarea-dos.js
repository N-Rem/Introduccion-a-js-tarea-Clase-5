//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un$botonBienvenida que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $botonBienvenida = document.querySelector("#saludar");

$botonBienvenida.onclick = function () {
    const $nombre = document.querySelector("#primerNombre").value;
    const $segundoNombre = document.querySelector("#segundoNombre").value;
    const $apellido = document.querySelector("#apellido").value;
    const $edad = document.querySelector("#edad").value;
        document.querySelector("#informacionUsuario").innerHTML = `<p>Nombres: ${$nombre} ${$segundoNombre}</p> <p>Apellido: ${$apellido}</p> <p>Edad: ${$edad}</p>`;
        document.querySelector("#bienvenida").innerText = `Bienvenido ${$nombre}`;
}
