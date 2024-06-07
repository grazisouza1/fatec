print("Graziella Souza")
print("RA: 1051392411017")

n=int(input("Insira um número"))

if n < 0:
    modulo = abs(n) 
    print("O módulo deste número é %i" % modulo)

elif n > 10:
    n2=int(input("Digite outro número"))
    diferença = n - n2
    print("A diferença entre estes dois números é de %i" % diferença)

else:
    print(n/5)