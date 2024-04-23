nome=str(input("Digite seu nome"))
ra=str(input("Digite seu RA"))
n1=float(input("Digite sua primeira nota"))
n2=float(input("Digite sua segunda nota"))

media=(n1+n2)/2

if media>=7:
    print("Parabéns, Você está aprovado!")
elif media<7:
    print("Você  ainda  tem  uma  chance!  Estude  mais  para  o exame.")
else:
    print("Insira um valor válido")