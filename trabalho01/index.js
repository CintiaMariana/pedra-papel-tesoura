var jogadorEscolha = 0;
var jogadorPontuacao = 0;
var computadorEscolha = 0;
var computadorPontuacao = 0;
var ganhador = -1;

function jogar(escolha){
    jogadorEscolha = escolha;

    computadorEscolha = Math.floor((Math.random() * (3 - 1 + 1))) + 1;
    
    if ((jogadorEscolha == computadorEscolha)){
        ganhador = 0;
    }
    else if(((jogadorEscolha == 1) && (computadorEscolha == 2)) ||
    ((jogadorEscolha == 2) && (computadorEscolha == 3)) ||
    ((jogadorEscolha == 3) && (computadorEscolha == 1))
    ){
        ganhador = 2;
    }
    else {
        ganhador = 1;
    }

    function removeSelecionado(prefixoId){
        for (let i=1; i<=3; i++){
            document.getElementById(`${prefixoId}-${i}`).classList.remove('selecionado');
        }
    }

    removeSelecionado("jogador-escolha");
    removeSelecionado("computador-escolha");
    
    document.getElementById("jogador-escolha-" + jogadorEscolha).classList.add('selecionado');
    document.getElementById("computador-escolha-" + computadorEscolha).classList.add('selecionado');

    if (ganhador == 0){
        document.getElementById('mensagem').innerHTML = 'Empate';
    }
    else if (ganhador == 1){
        document.getElementById('mensagem').innerHTML = 'Player Ganhou';
        jogadorPontuacao++;
    }
    else if (ganhador == 2){
        document.getElementById('mensagem').innerHTML = 'Computador Ganhou';
        computadorPontuacao++;
    }

    document.getElementById('jogador-pontos').innerHTML = jogadorPontuacao;
    document.getElementById('computador-pontos').innerHTML = computadorPontuacao;

}
