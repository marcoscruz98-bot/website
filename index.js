function mudar_conteudo_elemento() {

  document.getElementById("demo").innerHTML = "O clique está funcionando"
  
}

function mudar_cor_elemento(){

  const paragrafo = document.querySelector('#paragrafo');

  let cores = ['red', 'blue', 'green', 'brown', 'yellow', 'violet', 'orange', 'pink'];

  paragrafo.addEventListener('click', ()=> {

    const elemento_paragrafo = document.querySelector('#paragrafo');

    cores.forEach(function(cor){

      elemento_paragrafo.style.color = cor;

    });

  });

}