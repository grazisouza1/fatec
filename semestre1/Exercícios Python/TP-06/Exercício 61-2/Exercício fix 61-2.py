import os

diretorio_corrente = os.getcwd()

with open(r"C:\Users\Juciele\Documents\fatec\semestre1\Exercícios Python\TP-06\Exercício Fix 62\email.txt", 'r', encoding="utf-8") as email:
    conteudo = email.read()

email2 = input("Digite um email")
email3 = input("Digite outro email")
email4 = input("Digite outro email")

with open(r"C:\Users\Juciele\Documents\fatec\semestre1\Exercícios Python\TP-06\Exercício Fix 62\email.txt", 'w', encoding="utf-8") as email:
    email.read(conteudo)  
    email.write(email2 + "\n")  
    email.write(email3 + "\n")
    email.write(email4 + "\n")

print("Emails cadastrados com sucesso!")

email.close()