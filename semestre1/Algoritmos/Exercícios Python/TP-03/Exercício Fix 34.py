print("Graziella Souza")
print("RA: 1051392411017")

valorcompra = int(input("Insira o valorda sua compra"))

if valorcompra > 300:
    desconto20 = valorcompra * 0.20
    valorcomdesconto = valorcompra - desconto20
    print("Sua compra foi de %i reais. Com o desconto, você pagará %i" % (valorcompra, valorcomdesconto))

elif valorcompra >= 200 and valorcompra <= 299:
    desconto10 = valorcompra * 0.10
    valorcomdesconto = valorcompra - desconto10
    print("Sua compra foi de %i reais. Com o desconto, você pagará %i" % (valorcompra, valorcomdesconto))

elif valorcompra < 199:
    desconto5 = valorcompra * 0.05
    valorcomdesconto = valorcompra - desconto5
    print("Sua compra foi de %i reais. Com o desconto, você pagará %i" % (valorcompra, valorcomdesconto))

else:
    print("Insira um valor válido")


