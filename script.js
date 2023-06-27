const calcular = document.getElementById("calcular");
const limpar   = document.getElementById("limpar");

window.onload = function(e) {

  calcular.addEventListener("click", calcularImc);
  limpar.addEventListener("click"  , limparcampos)  

}

//  Limpar os campos de entrada de dados
function limparcampos() {

  const peso = document.getElementById("peso");
  const altura = document.getElementById("altura");

  peso.value = "";
  altura.value = "";

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "Digite novos valores e veja o resultado aqui...";


}

// Cálcula o IMC e faz validação
function calcularImc() {

  const peso = document.getElementById("peso");
  const altura = document.getElementById("altura");
  //const resultado = document.getElementById("resultado");

  let mensagem = "";

  if ((peso.value <= 0) || (altura.value <= 0)) {

    resultado.innerHTML = "Valores inválidos. ";

  } else {

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = calcularImcValor(peso.value,altura.value );

  }

}


//  calcular o IMC
function calcularImcValor (peso, altura){

 let imc = peso / (altura * altura);

  return ("IMC = " + imc.toFixed(2) + tabelapeso(imc));
  
}


// Verifica a faixa de IMC.
function tabelapeso(imc) {

  let mensagem = "";

  if (imc < 20) {

    mensagem = " - Abaixo do Peso";

  } else if (imc >= 20 && imc < 25) {

    mensagem = " - Normal";

  } else if (imc >= 25 && imc < 30) {

    mensagem = " - Excesso de peso";

  } else if (imc >= 30 && imc < 35) {

    mensagem = " - Obesidade";

  } else if (imc >= 35) {

    mensagem = " - Obesidade Mórbida";

  }

  return mensagem;
  

}


