const calculaDesconto = (precoProduto) => {

  return precoFinal = precoProduto - (precoProduto * (5 / 100))

}

const preco = document.getElementById("preco-produto")
console.log(preco)
const areaResultado = document.getElementById("resultado")
console.log(areaResultado);

const calcularDesconto = document.getElementById("calcula-desconto").onclick = () => {
  const precoProduto = parseInt(preco.value)
  const precoFinal = calculaDesconto(precoProduto)
  areaResultado.innerHTML = precoFinal
  preco.value = ""
}