var bancoDeDados = [];
function add(){
    let usuario = document.getElementById("username").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        bancoDeDados.push(usuario.toUpperCase());
        alert("Usuário cadastrado com sucesso")
        document.getElementById("username").value = null;
    }else{
        alert("Esse usuário já foi cadastrado")
    }
}
function login(){
    let usuario = document.getElementById("user").value;
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());
    if(pos == -1){
        alert("Usuário não encontrado")
    }else{
        alert("Bem vindo ao sistema")
    }
}
function remove(){
    let usuario = document.getElementById("userDelete").value; 
    let pos = bancoDeDados.indexOf(usuario.toUpperCase());  
    if(pos == -1){
        alert("Não foi encontrado um usuário com o nome: "+usuario)
    }
    else{
        bancoDeDados.splice(pos, 1)
        alert("Usuário excluído com sucesso")
}
document.getElementById("userDelete").value = null;
}
function edit(){
    let edit = document.getElementById("userEdit").value;   //Puxar valor do Imput
    let pos = bancoDeDados.indexOf(edit.toUpperCase())              //Retorna a posição do imput
    if(pos == -1){
        alert("Não há nada para ser editado")
    }else{
        let sub = prompt("Digite a correção do item").toUpperCase();          //Sub = Valor do prompt
        bancoDeDados[pos] = sub;
        alert("Usuário alterado com sucesso!")
    }
    document.getElementById("userEdit").value = null;

    /*for(let pos = 0; pos < bancoDeDados.length; pos++){
    if(bancoDeDados[pos].toUpperCase() == edit.toUpperCase()){
        let sub = prompt("Digite a correção do item")
        bancoDeDados[pos] = sub
        break;
    }
}
 */
}


