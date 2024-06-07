def valores(valor):
    print("Graziella Souza")
    print("RA: 1051392411017")


    if valor == 1 or valor == 2 or valor == 3:
        print("Seu vaor final é", valor ** 2)
    elif valor == 4 or valor == 9:
        print("Seu valor final é", valor ** 0.5)
    elif valor == 6 or valor == 7 or valor == 8:
        print("Seu valor final é", valor / 9)
    else:
        print("Digite um número válido")

valor = int(input("Digite um número entre 1, 2, 3, 4, 6, 7, 8 ou 9"))

valores(valor)



