let $botonCalcular = document.querySelector("#calcular");

$botonCalcular.onclick = function (){
    let $salarioAnual = Number(document.querySelector("#salarioAnual").value);
    let $salarioMensual = document.querySelector("#salarioMensual");
    let salarioMensual = $salarioAnual / 12;
    return $salarioMensual.value=`Salario Mensual ${salarioMensual}`;
}

