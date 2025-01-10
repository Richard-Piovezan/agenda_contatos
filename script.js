const form = document.getElementById('form-novo-contato')
const nomes = []
const numeros = []
const mensagemSucesso = document.getElementById('mensagem-sucesso')

let linhas = ''
let quantidadeContatos = 0

form.addEventListener('submit', function(e) {
    e.preventDefault()

    adicionaContato()
    atualizaAgenda()
})

function adicionaContato() {
    const nomeNovo = document.getElementById('nome-contato')
    const numeroNovo = document.getElementById('numero-contato')

    if (numeros.includes(numeroNovo.value)) {
        alert(`Este número ${numeroNovo.value} já está na sua agenda.`)
    } else {
        nomes.push(nomeNovo.value)
        numeros.push(numeroNovo.value)

        quantidadeContatos += 1

        let linha = `<tr>`
        linha += `<td><i class='bx bx-user' style='color:#37b9a8'></i> ${nomeNovo.value}</td>`
        linha += `<td class="numero-lista"><i class='bx bx-phone' style='color:#37b9a8'></i> ${numeroNovo.value}</td>`
        linha += `</tr>`

        linhas += linha

        mensagemSucesso.style.display = 'flex'
    }

    nomeNovo.value = ''
    numeroNovo.value = ''
}

function atualizaAgenda() {
    const corpoAgenda = document.querySelector('tbody')
    corpoAgenda.innerHTML = linhas

    document.getElementById('quantidade-contatos').innerHTML = quantidadeContatos
}

document.getElementById('nome-contato').addEventListener('input', function() {
    mensagemSucesso.style.display = 'none'
})

document.getElementById('numero-contato').addEventListener('input', function() {
    mensagemSucesso.style.display = 'none'
})