import os

#organização dos arquivos
diretorio_corrente = os.getcwd()

abaixo = open(r"C:\Users\Juciele\Documents\fatec\semestre1\Exercícios Python\TP-06\Exercício Fix 61\Abaixo do peso.txt", encoding="utf-8")
ideal = open(r"C:\Users\Juciele\Documents\fatec\semestre1\Exercícios Python\TP-06\Exercício Fix 61\Peso ideal.txt", encoding="utf-8")
acima = open(r"C:\Users\Juciele\Documents\fatec\semestre1\Exercícios Python\TP-06\Exercício Fix 61\Acima do peso.txt", encoding="utf-8")
erro = open(r"C:\Users\Juciele\Documents\fatec\semestre1\Exercícios Python\TP-06\Exercício Fix 61\Erro.txt", encoding="utf-8")

abaixor = abaixo.read()
idealr = ideal.read()
acimar = acima.read()
error = erro.read()

#entrada de dados pelo suário
peso = int(input("Digite seu peso (em kg)"))
altura = float(input("Digite sua altura (em metros EX.: 1.70)"))
sexo = str(input("Digite seu sexo (F ou M)"))

imc = peso / (altura ** 2)

def feminino(imc):
    if (imc < 19):
        print(abaixor)
    elif (imc >= 19) and (imc < 24):
        print(idealr)
    elif (imc > 24):
        print(acimar)
    else:
        print(error)
    
def masculino(imc):
    if (imc < 20 ):
        print(abaixor)
    elif (imc >= 20) and (imc < 25):
        print(idealr)
    elif (imc > 25):
        print(acimar)
    else:
        print(error)

if sexo == "M" or sexo == "m":
    masculino(imc)
elif sexo == "F" or sexo == "f":
    feminino(imc)
    

