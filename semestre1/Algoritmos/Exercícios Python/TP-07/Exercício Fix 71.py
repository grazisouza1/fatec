def calcular_pagamento(horas_trabalhadas, valor_hora):
    if horas_trabalhadas <= 40:
        salario = horas_trabalhadas * valor_hora
    else:
        salario = 40 * valor_hora + (horas_trabalhadas - 40) * (valor_hora * 1.5)
    return salario

def func():
        num_funcionarios = int(input("Digite o número de funcionários: "))
        funcionarios = []

        for i in range(num_funcionarios):
            horas_trabalhadas = float(input(f"Digite as horas trabalhadas do funcionário {i+1}: "))
            valor_hora = float(input(f"Digite o valor da hora de trabalho do funcionário {i+1}: "))
            salario = calcular_pagamento(horas_trabalhadas, valor_hora)
            funcionarios.append((horas_trabalhadas, valor_hora, salario))

        for i, (horas_trabalhadas, valor_hora, salario) in enumerate(funcionarios):
            print(f"Funcionário {i+1}:")
            print("Horas trabalhadas:", horas_trabalhadas)
            print("Valor da hora:", valor_hora)
            print("Salário a ser pago:", salario)
            print()

func()
