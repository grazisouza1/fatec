def sistema(valor):
    if valor < 0:
        print("O módulo deste número é", abs(valor))
    elif valor > 10:
        valor2 = int(input("Digite um outro número"))
        print("A diferença entre os números é de", valor - valor2)
    elif valor < 10 and valor > 0:
        print("O resultado do valos dividido por 5 é", valor / 5)
    else:
        print("Digite um valor válido")

valor = int(input("Digite um valor"))

sistema(valor)