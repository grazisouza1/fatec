
peso = int(input("Digite seu peso (em kg)"))
altura = float(input("Digite sua altura (em metros EX.: 1.70)"))
sexo = str(input("Digite seu sexo (F ou M)"))

imc = peso / (altura ** 2)

def feminino(imc):
    if imc < 19:
        print("Abaixo do peso")
    elif imc >= 19 and imc < 24:
        print("Peso ideal")
    elif imc >= 24:
        print("Acima do peso")
    else:
        print("Algo deu errado")
    
def masculino(imc):
    if imc < 20:
        print("Abaixo do peso")
    elif imc >= 20 and imc < 25:
        print("Peso ideal")
    elif imc >= 25:
        print("Acima do peso")
    else:
        print("Algo deu errado")

print("Nome: Graziella Souza")
print("RA: 1051392411017")

if sexo == "F" or sexo == "f":
    feminino(imc)

if sexo == "M" or sexo == "m":
    masculino(imc)