import os

diretorio_corrente = os.getcwd()
caminho = r"C:\Users\Juciele\Documents\fatec\semestre1\Exercícios Python\TP-06\Exercício Fix 61-2\email.txt"

with open(caminho, 'r', encoding="utf-8") as email:
    conteudo = email.read()

email2 = input("Digite um email")
email3 = input("Digite outro email")
email4 = input("Digite outro email")

with open(caminho, 'w', encoding="utf-8") as email:
    email.write(conteudo + "\n")  
    email.write(email2 + "\n")  
    email.write(email3 + "\n")
    email.write(email4 + "\n")

with open(caminho, 'r', encoding='utf-8') as email:
    conteudo = email.read()

lista = conteudo.split()

print("Emails cadastrados com sucesso!")
print(f"A lista agora armazena os seguintes emails: {lista}")

