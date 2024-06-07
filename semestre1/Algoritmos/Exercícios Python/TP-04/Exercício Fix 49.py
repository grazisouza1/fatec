def info(nome, idade):
    if idade > 65:
        print("Bem vindo", nome, ",Você tem mais de 65 anos")
    elif idade >= 18:
        print("Bem vindo", nome, ", Você é maior de idade")
    elif idade < 18:
        print("Bem vindo", nome, ",Você é menor de idade")
    else:
        print("Valor inválido")


nome = str(input("Digite seu nome"))
idade = int(input("Digite sua idade"))

info(nome, idade)

#No exercício anterior, a ordem dos if era cresente, e nesse, decresente. O padrão é decresente, mas ao adicionar pagamento>o no if anteriormente, alterou algumas 'regras'# 
