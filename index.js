function mudar_texto_elemento() {

  document.getElementById("demo").innerHTML = "O clique está funcionando"

}

function mudar_cor_elemento(){

  const paragrafo = document.querySelector('#paragrafo');

  paragrafo.addEventListener('click', ()=> {

    const elemento_paragrafo = document.querySelector('#paragrafo');

    elemento_paragrafo.style.color = 'red';

  });

}

function mudar_estilo_textual(){

  document.getElementById("elemento_strong").style.textDecorationLine = "line-through";
}


var video_1 = document.getElementById("video1");

function play_pause() {

    video_1.play();

}

function aumentar_tamanho(){

    video_1.width = 860;
    video_1.height = 600;
}

function diminuir_tamanho(){

    video_1.height = 300;
    video_1.width = 170;
}

function tamanho_normal(){

    video_1.height = 426;
    video_1.width = 240;
}