programa {
  funcao inicio() {
    //Sistema de M�DIAS de acordo com Fluxograma Aula 2!

    inteiro qtdTotal, qtdCad                        //Inteiros = Um n�mero inteiro � um n�mero sem parte decimal. Ele pode ser positivo, negativo ou zero.
    real map, media, totalPeso, atv, peso          // Real = N�mero que pode ser quebrado 
    cadeia mensagem                               //Cadeia = Aceita qualquer tipo de dado, Qualquer caracter, Letra, N�mero etc
    escreva("Digite a quantidade de atividades que deseja calcular\n")
    leia(qtdTotal)                               //Leia = Logar no console
    escreva("Digite a m�dia necess�ria para aprova��o\n")
    leia(map)
    media = 0
    totalPeso = 0
    qtdCad = 0
    enquanto(qtdCad < qtdTotal){                  //Enquanto = Usado para situa��es de repeti��o, ao inv�s de "SE"
     escreva("Digite a nota da atividade\n")
     leia(atv)
     escreva("Digite o peso da atividade\n")
     leia(peso)

     //Adicione as f�rmulas do fluxograma ->

    totalPeso = totalPeso + peso
    media = media + (atv * peso)
    qtdCad = qtdCad + 1      
  }
    media = media / totalPeso
    se(media >= map){
    mensagem = ""+media + ": Portanto est� aprovado"    //Bug do Portugol (professor resolveu) VAI TOMA NO CU PORTUGOL!!!! LIBERA O JAVA PROS CRIA
    }
    senao se(media >= map - 0.5){
    mensagem = ""+media + ": Portanto est� aprovado por conselho"   //Senao se vai quando h� uma condi��o, Apenas SENAO quando n�o h�.
    }
    senao{
    mensagem = ""+media ": Portanto est� reprovado"
    }
    escreva(mensagem)
      



  }
}
