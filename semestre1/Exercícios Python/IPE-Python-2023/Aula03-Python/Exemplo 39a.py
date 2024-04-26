dia = int(input("Digite um número entre '1 e 7': "))
mensagem = "Hoje é um bom dia para aprender Python"

match dia:
    case 1:
        print("Domingo." + mensagem)
    case 2:
        print("Segunda." + mensagem)
    case 3:
        print("Terça." + mensagem)
    case 4:
        print("Quarta." + mensagem)
    case 5:
        print("Quinta." + mensagem)
    case 6:
        print("Sexta." + mensagem)
    case 7:
        print("Sábado." + mensagem)
    case _:
        print("Dia inválido")
