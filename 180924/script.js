function executar1008(){
    let id, horas, valorHora, salario
    id = Number(prompt("Digite seu ID"));
    horas = Number(prompt("Quantas horas você trabalhou"));
    valorHora = Number(prompt("Quanto você ganha por Hora?"));

    salario = horas * valorHora;
    alert("ID: "+id + "\nSalário: R$" +salario.toFixed(2)) 
}

function executar1009(){
let nome, salario, totalVendas, comissao
nome = prompt("Digite o nome do Funcionário");
salario = Number(prompt("Digite qual seu salário"));
totalVendas = Number(prompt("Digite o total de vendas"));
comissao = totalVendas * 15/100
salario = salario + comissao 
alert("O salário de: " +nome + " Foi de R$: " +salario.toFixed(2));
}  

function executar1010(){
let codigoPeca1, numeroPeca1, valorPeca1, codigoPeca2, numeroPeca2, valorPeca2, resultadoTotal;
codigoPeca1 = Number(prompt("Digite o código do produto desejado"));
valorPeca1 = Number(prompt("Digite o valor do produto desejado"))
numeroPeca1 = Number (prompt("Digite o número de peças desejados"))
codigoPeca2 = Number (prompt("Digite o código do segundo produto desejado"))
valorPeca2 = Number (prompt("Digite o valor do segundo produto desejado"))
numeroPeca2 = Number (prompt("Digite o número de peças do segundo produto desejado"))
resultadoTotal = numeroPeca1 * valorPeca1 + numeroPeca2 * valorPeca2
alert("Resultado Total de sua compra foi: " +resultadoTotal);
}
