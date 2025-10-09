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
