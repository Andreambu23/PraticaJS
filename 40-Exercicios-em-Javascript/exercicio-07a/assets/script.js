let nome = document.getElementById("nome")
let sobrenome = document.getElementById("sobrenome")

const saudacao = document.getElementById("saudacao")

saudacao.onclick = () =>{
    
    alert(`Olá ${nome.value} ${sobrenome.value}`)

}