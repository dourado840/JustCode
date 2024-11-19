// Função para salvar o nome do usuário no LocalStorage
function salvarNome(){
    // Obtém o valor do campo de entrada de texto com o ID "nome"
    let nome = document.getElementById("nome").value
    // Salva o valor no LocalStorage com a chave "nomeUsuario"
    localStorage.setItem("nomeUsuario", nome)
    // Chama a função exibirMsg para exibir uma mensagem de sucesso
    exibirMsg("Nome salvo com sucesso")
}

// Função para exibir uma mensagem no elemento com o ID "mensagem"
function exibirMsg(mensagem){
    // Obtém o elemento com o ID "mensagem"
    let pMsg = document.getElementById("mensagem")
    // Define o conteúdo de texto do elemento como a mensagem passada como parâmetro
    pMsg.textContent = mensagem
}
window.onload = function(){
    // Verifica se o nome do usuário foi salvo no LocalStorage
    if(localStorage.getItem("nomeUsuario") != null){
        // Exibe uma mensagem de boas-vindas com o nome do usuário
        exibirMsg(`Bem-vindo, ${localStorage.getItem("nomeUsuario")}`)
    } else{
        // Se o nome do usuário não estiver salvo, exibe uma mensagem de boas-vindas
        exibirMsg("Bem-vindo! Digite seu nome e clique em salvar")
    }

}
