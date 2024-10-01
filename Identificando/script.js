function botao(){

    var nacionalidade = document.getElementById("txt1").value;  
    var res = document.getElementById("res");
    if (nacionalidade == "Brasil"){
        res.innerHTML = "Seu país de origem é " +nacionalidade +" portanto você é Brasileiro";
    }
    else if(nacionalidade != "Brasil"){
        res.innerHTML = "Seu país de origem é: " +nacionalidade + " portanto você é Estrangeiro";

    }
}