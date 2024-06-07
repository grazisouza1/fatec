def compras(valor):
    if valor > 300:
        print("Seu desconto será de 20%. Seu valor final é", valor - (valor * 0.20))
    elif valor >= 200 and valor <= 299:
        print("Seu desconto será de 10%. Seu valor final é", valor - (valor * 0.10))
    elif valor <= 199:
        print("Seu desconto será de 5%. Seu valor final é", valor - (valor * 0.05))
    elif valor < 0:
        print("Digite um valor válido")
    else:
        print("Digite um valor válido")


valor = int(input("Digite o valor da sua compra"))

compras(valor)