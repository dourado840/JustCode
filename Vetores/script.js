let batatas = []; // "Colchetes[]"" = Recebe / Virará ARRAY 
function add(){
    let produto = document.getElementById("txt").value;  // Vai puxar o valor que o usuário colocar no Input
    let posicao = batatas.indexOf(produto);
    if(posicao == -1){
        batatas.push(produto); 
        document.getElementById("lista").innerHTML = batatas;
    }     
    else{
        alert('O produto "' +produto+'" já está na lista')
    }
    

}
function remove(){
    let produto = document.getElementById("txt").value; // TXT = O que o usuário colocar no input.
    let posicao = batatas.indexOf(produto);  //Index Of = Retorna a Posição do Item
    batatas.splice(posicao, 1);  //Remove o item da posição informada pra frente
    if(posicao == -1){
        alert("Não foi encontrado produto com o nome: "+produto)
    }
    else{
        batatas.splice(posicao, 1)
        document.getElementById("lista").innerHTML = batatas;
}
}