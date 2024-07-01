document.getElementById("cpfForm").addEventListener("submit", function(event){
    event.preventDefault();

    let cpf = document.getElementById("cpf")
    let exibeCpf = document.getElementById("exibeCpf")

    exibeCpf.innerHTML = cpf.value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1")
})
