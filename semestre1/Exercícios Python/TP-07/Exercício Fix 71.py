con = {'A': 'APROVADO',
       'B': 'APROVADO',
       'C': 'EXAME',
       'D': 'DP'}

nome = input("Digite seu nome")
a = float(input("Digite sua 1º nota: "))
b = float(input("Digite sua 2º nota: "))
m = (a*4 + b*6) / 10
print()

print("TABELA DE ATRIBUIÇÃO:")
for chave, valor in con.items():
    print(chave,valor)
print()

for chave, valor in con.items():
    if m <= 10 and m >= 9:
       conceito = 'A'
    elif m <= 9 and m >= 7:
        conceito = 'B'
    elif m <= 7 and m >= 3:
        conceito = 'C'
    else:
        conceito = 'D'

print("ALUNO: ", nome)
print("RA: 1051392411017")
print()
print("Segundo a tabela, seu conceito é ", con[conceito], ", e sua média foi de ", m)
