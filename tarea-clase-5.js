//TAREA: completar tareas/clase-5/index.html para que incluya tarea-clase-5.js
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

let $botonCalcular = document.querySelector("#calcular");

$botonCalcular.onclick = function (){
    let $salarioAnual = Number(document.querySelector("#salarioAnual").value);
    let $salarioMensual = document.querySelector("#salarioMensual");
    let salarioMensual = $salarioAnual / 12;
    return $salarioMensual.value=`Salario Mensual ${salarioMensual}`;
}

