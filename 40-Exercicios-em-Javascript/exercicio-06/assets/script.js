let imagem = document.getElementById("lampada")


imagem.onclick = function (){

    if(imagem.src == "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true"){
        imagem.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true"
    }else{
        imagem.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true"
    }

}