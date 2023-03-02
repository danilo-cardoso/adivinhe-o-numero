function verificaChute(chute) {
    const num =+ chute

    if(chuteInvalido(num)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (valorPermitido(num)) {
        elementoChute.innerHTML += `<div>Valor inválido! \nFale um número entre ${menorValor} e ${maiorValor}</div>`
        return
    }

    if (num === numeroSecreto) {
        document.body.innerHTML = `
            <h1>Você acertou!</h1>
            <h3>O número secreto era ${numeroSecreto}!</h3>

            <button id="jogar-novamente" class="botao">Jogar Novamente</button>
        `
    }else if (num > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i></div>
        `

        }else{
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i></div>
        `
        }
    
}

function chuteInvalido(num) {
    return Number.isNaN(num)
}

function valorPermitido(num) {
    return num > maiorValor || num < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload()
    }

})