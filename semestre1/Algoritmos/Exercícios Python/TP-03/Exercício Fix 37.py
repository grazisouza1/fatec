print("Graziella Souza")
print("RA: 1051392411017")

salario = int(input("Insir seu salário"))

if salario <= 1500:
    acrescimo = salario * 0.20
    salariofinal = salario + acrescimo
    print("Seu salário com o acréscimo será de %i" % salariofinal)

elif salario > 1500 and salario < 2500:
    acrescimo = salario * 0.10
    salariofinal = salario + acrescimo
    print("Seu salário com o acréscimo será de %i" % salariofinal)

else:
    acrescimo = salario * 0.05
    salariofinal = salario + acrescimo
    print("Seu salário com o acréscimo será de %i" % salariofinal)
