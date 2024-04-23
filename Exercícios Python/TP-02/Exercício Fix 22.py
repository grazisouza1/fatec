compra1=int(input("Digite o primeiro valor da sua compra"))
compra2=int(input("Digite o segundo valor da sua compra"))
compra3=int(input("Digite o terceiro valor da sua compra"))

if compra1 > 300:
    desc20 = float(compra1-(compra1 * 0.20))
    print("Valor da primeira compra com um desconto de 20%", desc20)
else: print(compra1)

if compra2 >= 200:
    desc15 = float(compra2-(compra2 * 0.15))
    print("Valor da segunda compra com um desconto de 15%", desc15)
else: print(compra2)

if compra3 > 100:
    desc10 = float(compra3-(compra3 * 0.10))
    print("Valor da terceira compra com um desconto de 10%", desc10)
else: print(compra3)