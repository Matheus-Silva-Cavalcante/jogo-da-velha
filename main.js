const listaDeTeclas = document.querySelectorAll('.casa');
let rodadas = 0

const novoJogo = document.querySelector('.reset');

const posibilidadesDeVitoria = ['123','456','789','147','258','369','159','357'];
let casaX = ''
let casaO = ''

let parar = false

function verificarVencedor(){
    for (let index = 0; index < posibilidadesDeVitoria.length; index++){
        const posibilidade = posibilidadesDeVitoria[index]

        if(casaX.includes(posibilidade[0]) && casaX.includes(posibilidade[1]) && casaX.includes(posibilidade[2])){
            document.querySelector('#vencedor').innerHTML = '✕ ganhou 🎉'
            parar = true
        }

        if(casaO.includes(posibilidade[0]) && casaO.includes(posibilidade[1]) && casaO.includes(posibilidade[2])){
            document.querySelector('#vencedor').innerHTML = '◯ ganhou 🎉'
            parar = true
        }
    }
}

novoJogo.onclick = function(){
    window.location.reload();
}


for (let posicao = 0; posicao < listaDeTeclas.length; posicao++){
    const botao = listaDeTeclas[posicao];
    
    botao.onclick = function(){
        if(parar){
            return
        }
        const resto = rodadas % 2;
        rodadas++
        document.querySelector('#rodada').innerHTML = rodadas;
        if(resto === 0){
            botao.innerHTML = '✕'
            botao.style = 'background: #7E8A97; color: white;'

            casaX += botao.value
            // casaX = casaX + botao.value 
            
        }else{
            botao.innerHTML = '◯'
            botao.style = 'background: #30475E; color: white;'

            casaO += botao.value
        }
        
        botao.onclick = null
        verificarVencedor();
    }

}

