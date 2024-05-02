def entrada(media):
    if media >= 7:
        print("Parabéns, você está aprovado!")
    elif media < 7:
        print("Você  ainda  tem  uma  chance!  Estude  mais  para  o exame.")
    print("Sua média foi", media)

n1 = int(input("Digite sua primeira nota"))
n2 = int(input("Digite sua segunda nota"))
media = (n1 + n2) / 2

entrada(media)