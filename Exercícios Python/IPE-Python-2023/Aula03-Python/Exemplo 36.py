idade = int(input("Informe sua idade: "))

if (idade <= 0):
    print("Sua idade não pode ser 0 ou menor que 0!" ,idade)
elif (idade >120):
    print("A sua idade não pode ser maior que 120!" ,idade)
elif (idade >= 18) and (idade < 120):
    print("Parabens, você pode votar!")
elif (idade < 18):
    print("Você precisa ter mais do que 18 anos!")