def entrada(media):
    if media >= 7:
        print("Parabéns, você está aprovado!")
    elif media < 7:
        print("Você  ainda  tem  uma  chance!  Estude  mais  para  o exame.")
    else:
        print("Digite um valor válido")
    print("Sua média foi", media)

def entrada2(media2):
    if media2 >= 5:
        print("Parabéns, você aproveitou a sua chance! Está aprovado.")
    elif media2 < 5:
        ("Estude mais para a próxima. Você não alcançou o mínimo necessário.")
    else:
        print("Digite um valor válido")

n1 = float(input("Digite sua primeira nota"))
n2 = float(input("Digite sua segunda nota"))
n3 = float(input("Digite a nota do seu exame"))
media = (n1 + n2) / 2
media2 = (media + n3) / 2

entrada(media2)