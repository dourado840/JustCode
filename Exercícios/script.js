function atv1(){
    let n = Number(prompt("Escreva um número"));
    let i = 1;
    while(i <= n){
    alert(i);
    i ++
}
}
function atv2(){
    let n = Number(prompt("Escreva um número"));
    let soma = 0;
    while(n != 0){
        soma += n      //soma = soma + n;
        n = Number(prompt("Escreva um número"));
    }
    alert(soma);
}
function atv3(){
    let qtdTotal = Number(prompt ("Digite a quantidade de atividades que deseja calcular"));
    let media = 0;
    
    for(let qtdCad = 0; qtdCad < qtdTotal; qtdCad++){
    let atv = Number(prompt ("Digite a nota da atividade"));
    media += atv
}
media /= qtdTotal
alert(media);
}
function atv4(){
    let n = Number(prompt("Digite o número para calcular o fatorial"))
    let i = 1;
    let r = 1;
    while(i <= n){
    r = r * i;
    i ++;
    }
    alert(r)
}
function atv5(){
    let n = Number(prompt("Digite um número"));
    let tabela = ""; 
    for(let mult = 1; mult <= 10; mult++){     // Para FOR = inicializacao, condicao para repedir e implemento
    tabela += "\n" + n+ " x "+mult+" = "+(n*mult);
    }
    alert(tabela)   
}
function atv6(){
let n = Number(prompt("Digite um número"));
let pares = "";
for(let par = 1; par <= n; par++){
if(par % 2 == 0){
pares += "\n" +par;
}
}
alert(pares)
}
function atv7(){
 let n = Number(prompt("Digite um número"))
 let passo = Number(prompt("Digite o passo"))
 let i = 1;
 while(i < n){
 alert(i);
 i += passo;
 } 
}
function atv8(){
    let n = Number(prompt("Digite um número"));
    let impares = "";
    for(let impar = 1; impar <= n; impar++){
    if(impar % 2 != 0){
    impares += "\n" +impar;
    }
    }
    alert(impares)
}
function atv9(){
    let n1 = Number(prompt ("Digite um número"));
    let n2 = Number(prompt("Digite um possível múltiplo"));
    if( n1 % n2 == 0){
        alert(n2 + " É múltiplo de "+n1);
    }
    else{
        alert(n2+" Não é múltiplo de " +n1);
    }
}
function atv10(){
    let n = Number(prompt("Digite um número"));
    let qtdDivisores = 0;
    let ant = 1;
    while(ant <= n){
        if(n % ant == 0){
        qtdDivisores ++;
    }
    ant ++;
    }
    if(qtdDivisores == 2){
        alert(n + " É primo!");
    }
 else{
    alert(n + " Não é primo!")
 }   
}