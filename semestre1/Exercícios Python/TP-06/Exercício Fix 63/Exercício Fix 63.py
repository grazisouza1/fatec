import os

diretorrio_corrente = os.getcwd()

caminho = r"C:\Users\Juciele\Documents\fatec\semestre1\Exercícios Python\TP-06\Exercício Fix 63\mensagem.txt"

with open(caminho, 'r', encoding = "utf-8") as mensagem:
    conteudo = mensagem.read()

lista_palavras = conteudo.split()

print(f"O tamanho do arquivo atual é de {len(conteudo)} caracteres") #Saber o tamanho da variável
print(f"A lista de palavras do arquivo é: {lista_palavras}")



