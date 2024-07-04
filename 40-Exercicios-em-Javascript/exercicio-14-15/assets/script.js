function criaTexto() {
  const paragrafo = document.getElementById("paragrafo");

  paragrafo.innerHTML = "Texto adicionado utilizando o window onload";
}

window.onload = criaTexto();

function criaTexto2() {
  const botao = document.getElementById("botao");
  const paragrafo = document.getElementById("paragrafo2");

  botao.onclick = () => {
    paragrafo.innerHTML =
      "Este foi adicionado também com o window onload, porém, acionado pelo botão.";
  };
}

window.onload = criaTexto2()
