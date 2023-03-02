const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elemMenorValor = document.getElementById('menor-valor')
const elemMaiorValor = document.getElementById('maior-valor')

elemMenorValor.innerHTML = menorValor
elemMaiorValor.innerHTML = maiorValor