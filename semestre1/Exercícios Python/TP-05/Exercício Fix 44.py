
nome = (input("Digite seu nome"))
nota1 = int(input("Digite sua nota na primeira avaliação"))
nota2 = int(input("Digite sua nota na segunda avaliação"))

MG = (nota1 * 4 + nota2 * 6) / 10

if MG >= 9 and MG<= 10:
    print("Seu conceito é A, você está aprovado(a)!")
elif MG >= 7 and MG < 9:
    print("Seu conceito é B, você está Aprovado(a)!")
elif MG >= 3 and MG < 7:
    print("Seu conceito é C, você precisa fazer o exame")
elif MG >= 0 and MG < 3:
    print("Seu conceito é D, você está de DP")
else:
    print("Valores inválidos")
