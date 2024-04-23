print("Programa que convrte dias da semana numérico em texto")
numero_dia = int(input("Informe um número para saber o dia da semana (1, 2, 3, 4, 5, 6 ou 7):"))
texto = "Um bom dia para aprender Python"

if (numero_dia == 1):
    print("Domingo." +texto)
elif (numero_dia == 2):
    print("Segunda." +texto)
elif (numero_dia == 3):
    print("Terça." +texto)
elif (numero_dia == 4):
    print("Quarta." +texto)
elif (numero_dia == 5):
    print("Quinta." +texto)
elif (numero_dia == 6):
    print("Sexta." +texto)
elif (numero_dia == 7):
    print("Sábado." +texto) 
else:
    print("Valor inválido. Favor digitar um dos número (1, 2, 3, 4, 5, 6 ou 7)")

print("Fim do programa")

