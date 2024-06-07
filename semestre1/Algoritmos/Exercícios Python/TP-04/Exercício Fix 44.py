import math

def valor(n):
    if n == 1 or n == 2:
        print( n, "Ao cubo é igual a", n**3 )
    elif n % 3 == 0:
        print( n, "É divisível por 3, e seu fatorial é", math.factorial(n))
    elif n == 4 or n == 5 or n == 7 or n == 8:
        print( n, "Dividido por 9 é igual a", n/9 )
    else:
        print("Valor inválido")

n = int(input("Digite um número"))

valor(n)