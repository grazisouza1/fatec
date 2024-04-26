h=float(input("Insira sua altura em metros"))
s=input("Insira 'f' para feminino e 'm' para masculino")

if s == 'm':
   peso_ideal=(0.727*h)-58
   print("Seu peso ideal é", peso_ideal)
elif s== 'f':
    peso_ideal=(0.621*h)-44.7
    print("Seu peso ideal é", peso_ideal)
else:
    print("Insira um gênero válido")





