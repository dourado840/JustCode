programa {
  funcao inicio() {
    //Sistema de MÉDIAS de acordo com Fluxograma Aula 2!

    inteiro qtdTotal, qtdCad                        //Inteiros = Um número inteiro é um número sem parte decimal. Ele pode ser positivo, negativo ou zero.
    real map, media, totalPeso, atv, peso          // Real = Número que pode ser quebrado 
    cadeia mensagem                               //Cadeia = Aceita qualquer tipo de dado, Qualquer caracter, Letra, Número etc
    escreva("Digite a quantidade de atividades que deseja calcular\n")
    leia(qtdTotal)                               //Leia = Logar no console
    escreva("Digite a média necessária para aprovação\n")
    leia(map)
    media = 0
    totalPeso = 0
    qtdCad = 0
    enquanto(qtdCad < qtdTotal){                  //Enquanto = Usado para situações de repetição, ao invés de "SE"
     escreva("Digite a nota da atividade\n")
     leia(atv)
     escreva("Digite o peso da atividade\n")
     leia(peso)

     //Adicione as fórmulas do fluxograma ->

    totalPeso = totalPeso + peso
    media = media + (atv * peso)
    qtdCad = qtdCad + 1      
  }
    media = media / totalPeso
    se(media >= map){
    mensagem = ""+media + ": Portanto está aprovado"    //Bug do Portugol (professor resolveu) VAI TOMA NO CU PORTUGOL!!!! LIBERA O JAVA PROS CRIA
    }
    senao se(media >= map - 0.5){
    mensagem = ""+media + ": Portanto está aprovado por conselho"   //Senao se vai quando há uma condição, Apenas SENAO quando não há.
    }
    senao{
    mensagem = ""+media ": Portanto está reprovado"
    }
    escreva(mensagem)
      



  }
}
