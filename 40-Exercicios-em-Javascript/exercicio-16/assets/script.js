const soma = (numero1, numero2) => {
  return parseFloat(numero1) + parseFloat(numero2);
};

let numero1 = document.getElementById("soma1");
let numero2 = document.getElementById("soma2");

const resultado = document.getElementById("resultado-soma");

document.getElementById("somar").onclick = () => {
  numero1.value === "" || numero2.value === ""
    ? (resultado.innerHTML = 0)
    : (resultado.innerHTML = soma(numero1.value, numero2.value));
};
