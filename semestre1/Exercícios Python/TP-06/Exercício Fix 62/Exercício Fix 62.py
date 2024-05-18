import os

diretorio_corrente = os.getcwd()

caminho = r"C:\Users\Juciele\Documents\fatec\semestre1\Exercícios Python\TP-06\Exercício Fix 63\senhas.txt"

with open(caminho, 'r', encoding="utf-8") as senha:
    conteudo = senha.read()

senha2 = input("Digite uma senha")
senha3 = input("Digite outra senha")
senha4 = input("Digite outra senha")
senha5 = input("Digite outra senha")
senha6 = input("Digite uma última senha")

with open(caminho, 'w', encoding="utf-8") as senha:
    senha.write(conteudo)
    senha.write(senha2 + "\n")
    senha.write(senha3 + "\n")
    senha.write(senha4 + "\n")
    senha.write(senha5 + "\n")
    senha.write(senha6 + "\n")

print("Senhas adicionadas!")

senha.close()
