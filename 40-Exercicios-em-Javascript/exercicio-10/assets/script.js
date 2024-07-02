let numero1 = document.getElementById("soma1")
let numero2 = document.getElementById("soma2")
let resultado = document.getElementById("resultado-soma")

let botao = document.getElementById("somar")

botao.onclick = () => {

    let soma = parseInt(numero1.value) + parseInt(numero2.value)
    resultado.innerHTML = soma

}