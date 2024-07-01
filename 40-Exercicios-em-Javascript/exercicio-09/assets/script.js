document.getElementById("cpfForm").addEventListener("submit", function(event){
    event.preventDefault();

    let cpf = document.getElementById("cpf")
    let exibeCpf = document.getElementById("exibeCpf")


    console.log(cpf.value)
    exibeCpf.innerHTML = cpf.value
    .replace(/\D/g, "")
    .replace("$1.$2", /(\d{3})(\d)/)
    .replace("$1.$2", /(\d{3})(\d)/ )
    .replace("$1-$2", /(\d{3})(\d)/)
    .replace("$1", /(-\d{2})\d+?$/)

    document.getElementById("cpf").value = ""
})
