let sliderElement = document.getElementById("slider")
let buttonElement = document.getElementById("button")

let sizePassword = document.getElementById("valor")
let password = document.getElementById("password")

let containerPassword = document.getElementById("container-password")

let charset = "qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLÇZXCVBNM"
let novaSenha = ""

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}
// Passando o SizePassword para o valor de AGORA alterado no input (ACHEI COMPLEXO)

function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i)
        pass += charset.charAt(Math.floor(Math.random() *n))
    // TRAVEI COMPLEXO DMS
    containerPassword.classList.remove("hide")
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    alert("Senha copiada com sucesso")
    navigator.clipboard.writeText(novaSenha);
    // CODIGO PARA AO CLICAR NA SENHA ELA SER COPIADA
}