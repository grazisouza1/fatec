def aumento(pagamento):
    if pagamento <= 1500 and pagamento > 0:
        print("Você recebeu um acréscimo de 20%! Seu salário agora é", pagamento + (pagamento * 0.20))
    elif pagamento > 1500 and pagamento < 2500:
        print("Você recebeu um acréscimo de 10%! Seu salário agora é", pagamento + (pagamento * 0.10)) 
    elif pagamento > 0:
       print("Você recebeu um acréscimo de 5%! Seu salário agora é", pagamento + (pagamento * 0.05))
    else:
        print("Valor inválido")


salario = int(input("Digite o valor do seu salário"))

aumento(salario)

#As "atribuições" que vem primeiro têm prioridade, então ao colocar pagamento>0 no último elif, abrange os valores maiores que 0, mas que não fazem parte dos grupos anteriormente citados#
