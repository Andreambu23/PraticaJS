const botao = document.getElementById("exibe-nome")

botao.addEventListener("click", function(){

    const nome = document.getElementById("input-nome").value
    alert(nome.length + ' Letras')
    
    document.getElementById("input-nome").value = ""
    
})


