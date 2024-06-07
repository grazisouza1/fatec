qtde_alunos = 0
medias = []

while qtde_alunos <= 4:
    media = int(input("Insira sua média: "))
    medias.append(media)
    print(medias)
    qtde_alunos = qtde_alunos + 1
    print(qtde_alunos)

maior_media = max(medias)
print(f'A maior média é:', maior_media)