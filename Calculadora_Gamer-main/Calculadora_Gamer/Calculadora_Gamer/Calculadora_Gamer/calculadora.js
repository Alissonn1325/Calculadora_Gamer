let btnNumeros = document.getElementsByClassName('Btn_numero');
let visor = document.getElementById('resultado');

let operacao = null;
let valor1 = null;

for (let botao of btnNumeros) {
    botao.addEventListener('click', clique_numero);

}
function clique_numero(event) {

    if (visor.innerHTML === '0' || isNaN(visor.innerHTML))
        visor.innerHTML = event.target.innerHTML;
    else
        visor.innerHTML = visor.innerHTML + event.target.innerHTML;
}

let btnOperadores = document.getElementsByClassName("Btn_operador");

let btnAC = document.getElementById("botao-AC");
btnAC.addEventListener('click', limpar_Visor);

function limpar_Visor(event) {
    visor.innerHTML = "0";
}

for (let botao of btnOperadores) {
    botao.addEventListener("click", clique_operador);
}

function clique_operador(event) {
    if (isNaN(visor.innerHTML) === false) {
        if (valor1 === null) {
            valor1 = Number(visor.innerHTML);

        }
        else {
            visor.innerHTML = realiza_operacao(operacao, valor1, Number(visor.innerHTML))
            valor1 = Number(visor.innerHTML);
        }
    }

    operacao = event.target.innerHTML

    visor.innerHTML = event.target.innerHTML

}

const Btn_Igual = document.getElementById(`botao-igual`) 

Btn_Igual.addEventListener(`click`, calcula_resultado)

function calcula_resultado(event) {
    if (valor1 != null && operacao != null && isNaN(visor.innerHTML) === false) {

        visor.innerHTML = realiza_operacao(valor1, operacao, Number(visor.innerHTML));
        valor1 = null;
        operacao = null;
    }
}
function realiza_operacao(valor1, operacao, valor2) {
    if (operacao === "+") {
        return valor1 + valor2
    }
    else if (operacao === "-") {
        return valor1 - valor2
    }
    else if (operacao === "*") {
        return valor1 * valor2
    }
    else if (operacao === "÷") {
        return valor1 / valor2
    }
}

let body = document.getElementsByTagName("body")[0];

body.addEventListener("keydown", pressionouTecla);

function pressionouTecla(event) {
    if (event.key === "*") {
        document.getElementsByClassName("botao-multiplicacao")[0].click();
    } else if (event.key === "9") {
        document.getElementsByClassName("n9")[0].click();
    } else if (event.key === "8") {
        document.getElementsByClassName("n8")[0].click();
    } else if (event.key === "7") {
        document.getElementsByClassName("n7")[0].click();
    } else if (event.key === "6") {
        document.getElementsByClassName("n6")[0].click();
    } else if (event.key === "5") {
        document.getElementsByClassName("n5")[0].click();
    } else if (event.key === "4") {
        document.getElementsByClassName("n4")[0].click();
    } else if (event.key === "3") {
        document.getElementsByClassName("n3")[0].click();
    } else if (event.key === "2") {
        document.getElementsByClassName("n2")[0].click();
    } else if (event.key === "1") {
        document.getElementsByClassName("n1")[0].click();
    } else if (event.key === "0") {
        document.getElementsByClassName("n0")[0].click();
    } else if (event.key === "Backspace") {
        document.getElementById("botao-AC").click();
    } else if (event.key === "/") {
        document.getElementsByClassName("botao-divisao")[0].click();
    } else if (event.key === "+") {
        document.getElementsByClassName("botao-adicao")[0].click();
    } else if (event.key === "-") {
        document.getElementsByClassName("botao-subtracao")[0].click();
    } else if (event.key === "Enter") {
        document.getElementById("botao-igual").click();
    }
    else if (event.key === ".") {
        document.getElementById("botao-ponto").click();
    }

}

let BtnPonto = document.getElementById("botao-ponto");
BtnPonto.addEventListener("click", clique_ponto)

function clique_ponto(event) {

    if (isNaN(visor.innerHTML) === true) {
        visor.innerHTML = '.';
    }
    else if (isNaN(visor.innerHTML + '.') === false) {
        visor.innerHTML = visor.innerHTML + '.';
    }
}