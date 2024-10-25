let numeros = []
let pai = []
let mae = []
let filho = []

function executar83() {
    let numero
    for (let i = 0; i <= 25; i++) {
        numero = Math.round(Math.random() * 100)
        numeros.push(numero)
        console.log(numeros);
    }
    console.log(numeros);
    document.getElementById("resultado").innerHTML = "Array gerado com absurdo sucesso"
}
function executar83b() {
    let index1, index2
    do {
        index1 = Number(prompt("Digite um número entre 0 e 24"))
    } while (index1 < 0 || index1 > 24)

    do {
        index2 = Number(prompt("Digite outro número"))
    } while (index1 < 0 || index1 > 24)

    soma = numeros[index1] + numeros[index2]
    console.log("Soma: ", soma);
}

function mostrarArray() {
    document.getElementById("resultado").innerHTML = "<h2>Lançamento dos Dados</h2>"
    for (let i = 0; i < numeros.length; i++) {
        document.getElementById("resultado").innerHTML += "Dados: " + numeros[i] + "<BR>"
    }
}

function pesquisar() {
    let valor = Number(prompt("Digite o valor para pesquisar: "))
    if (numeros.indexOf(valor) == -1) {
        alert("Nana")
    } else {
        alert("Achei: " + numeros.indexOf(valor))
    }
}
function executar85() {
    let numero
    for (let i = 0; i <= 50; i++) {
        numero = Math.round(Math.random() * 201) - 100
        numeros.push(numero)
        console.log(numeros);
    }
    console.log(numeros);
    document.getElementById("resultado").innerHTML = "Array gerado com absurdo sucesso"
    mostrarArray()
}
function executar86() {
    for (let i = 0; i <= 50; i++) {
        if (numeros[i] < 0) {
            numeros[i] = 0;
        }
    }
    console.log(numeros);
    document.getElementById("resultado").innerHTML = "Array gerado com absurdo sucesso"
    mostrarArray()
}
function executar87(){
    for (let i = 0; i <= 50; i++) {
        let numero = Math.round(Math.random() * 201) 
        pai.push(numero)
        console.log(pai);
        document.getElementById("resultado").innerHTML += "Array Pai: " + pai[i] + "<BR>"
    }
    

    for (let i = 0; i <= 50; i++) {
        let numero = Math.round(Math.random() * 201) 
        mae.push(numero)
        console.log(mae);
        document.getElementById("resultado").innerHTML += "Array Mãe: " + mae[i] + "<BR>"
    }

        for (let i = 0; i< pai.length; i++) {
            if(i % 2 == 0){
                filho.push(i)
        }
    }
        for (let i = 0; i< mae.length; i++) {
            if(i % 2 != 0){
                filho.push(i)
        }
        document.getElementById("resultado").innerHTML += "Array Filho: " + filho[i] + "<BR>"
    }


    
}