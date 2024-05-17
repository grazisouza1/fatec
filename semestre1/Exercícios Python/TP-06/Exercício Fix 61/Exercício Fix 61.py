import os

diretorio_corrente = os.getcwd()
print("Você está no diretório:")
print(diretorio_corrente)

arq = open(r"C:\Users\Juciele\Documents\fatec\semestre1\Exercícios Python\TP-06\Exercício Fix 61\Mensagem.txt", encoding="utf-8")
print(arq)

text = arq.read()
print(text)

