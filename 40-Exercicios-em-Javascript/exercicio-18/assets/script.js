const resultado = document.getElementById("resultado");

document.getElementById("par-impar").onclick = () => {
  let numero = parseInt(document.getElementById("numero").value);
  if (numero % 2 == 0) {
    resultado.innerHTML = "Par";
  } else {
    resultado.innerHTML = "Impar";
  }
};
