
const calcular = document.getElementById("calcular");
const limpar = document.getElementById("limpar");

window.onload = function(e) {

  calcular.addEventListener("click", calcularImc);
  limpar.addEventListener("click", limparcampos)

}

function limparcampos() {
  const peso = document.getElementById("peso");
  const altura = document.getElementById("altura");

  peso.value = "";
  altura.value = "";

}


function calcularImc() {

  const peso = document.getElementById("peso");
  const altura = document.getElementById("altura");

  let mensagem = "";

  let imc = peso.value / (altura.value * altura.value);

  if (imc < 20) {

    mensagem = "IMC = " + imc.toFixed(2) + " - Abaixo do Peso";

  } else if (imc >= 20 && imc < 25) {

    mensagem = "IMC = " + imc.toFixed(2) + " - Normal";

  } else if (imc >= 25 && imc < 30) {

    mensagem = "IMC = " + imc.toFixed(2) + " - Excesso de peso";

  } else if (imc >= 30 && imc < 35) {

    mensagem = "IMC = " + imc.toFixed(2) + " - Obesidade";

  } else if (imc >= 35) {

    mensagem = "IMC = " + imc.toFixed(2) + " - Obesidade Mórbida";

  }

  const resultado = document.getElementById("resultado");

  resultado.innerHTML = mensagem;

}


