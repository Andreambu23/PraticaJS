const multiplicar = (num1, num2) =>{
  return num1 * num2;
}

const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")

document.getElementById("multiplicar").onclick = () =>{
  const multiplicacao = multiplicar(parseInt(numero1.value), parseInt(numero2.value))

  document.getElementById("resultado").innerHTML = multiplicacao

}
