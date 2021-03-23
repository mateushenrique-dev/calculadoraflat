const numeros = document.querySelectorAll("input");
const telaResultado = document.querySelector("#result");
const buttonDarkMode = document.querySelector(".mode");
let conta;

function botao(value) {
  conta = telaResultado.value += value;
}

function limpar() {
  telaResultado.value = "";
}

function calc() {
  const resultado = eval(conta);
  telaResultado.value = resultado;
}

function retirar() {
  telaResultado.value = telaResultado.value.slice(0, -1)
}

buttonDarkMode.addEventListener("click", function () {
  document.documentElement.classList.toggle("ativo");
  buttonDarkMode.classList.toggle("ativo");
});
