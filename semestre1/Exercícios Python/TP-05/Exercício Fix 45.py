import getpass

senha_professor = "fatec@professores"

usuario = input("Digite seu usuário:")
senha = getpass.getpass("Digite sua senha:")

if senha_professor == senha:
    print(f'Bem Vindo', usuario)
else:
    print("Você não está autorizado a acessar")
    