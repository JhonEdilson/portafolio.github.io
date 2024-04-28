function sumar(){
    // const forma = document.getElementById('forma');
    let operandoA = document.getElementById('OperandoA');
    let operandoB = document.getElementById('OperandoB');
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)){
        resultado = 'No es un número';
    }

    // Obtengo el DIV del HTML con ID resultado.
    document.getElementById('resultado').innerHTML = 'Resultado: ' + resultado;
    console.log(resultado);

}