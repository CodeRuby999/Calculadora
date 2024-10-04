let expresionCompleta = '';
let resultadoActual = null;

function actualizarPantalla() {
    document.getElementById('mostrar').value = expresionCompleta || '0';
}

function agregarAExpresion(valor) {
    if (resultadoActual !== null && !['+', '-', 'x', '÷'].includes(valor)) {
        expresionCompleta = '';  
        resultadoActual = null;
    }
    expresionCompleta += valor;  
    actualizarPantalla();
}

function calcularResultado() {
    try {
        let expresionEvaluable = expresionCompleta.replace(/x/g, '*').replace(/÷/g, '/');
        resultadoActual = eval(expresionEvaluable);  
        expresionCompleta = resultadoActual.toString(); 
        actualizarPantalla();
    } catch (error) {
        expresionCompleta = 'Error';  
        actualizarPantalla();
    }
}

function reiniciarCalculadora() {
    expresionCompleta = '';  
    resultadoActual = null;  
    actualizarPantalla();
}

document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('button');
    
    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const valor = boton.value;
            
            if (valor === '=') {
                if (expresionCompleta) {
                    calcularResultado();
                }
            } else if (valor === 'Eliminar') {
                reiniciarCalculadora();
            } else {
                agregarAExpresion(valor);
            }
        });
    });
});
