def divisao():
    if n % 10 == 0: 
        print("Esse número é divisível por 10")
    elif n % 5 == 0:
        print("Esse número é divisível por 5")
    elif n % 2 == 0:
        print("Esse número é divisível por 2")
    else:
        print("O valor não é divisível por 10, 5 ou 2")

n = int(input("Digite um número"))

divisao()

'''
Uma forma mais completa de fazer:
    def divisao():
    if n % 10 == 0: 
        if n % 5 == 0:
            if n % 2 == 0:
                print("Esse número é divisível por 10, 5 e 2")
            else: print("Esse número é divisível por 5 e 10")
        elif n % 2 == 0:
            print("Esse número é divisível por 10 e 2")
        else: print("Esse número pe divisível por 10")
    elif n % 5 == 0:
        if n % 2 == 0:
            print("Esse número é divisível por 2 e 5")
        else: print("Esse número é divisível por 5")
    elif n % 2 == 0:
        print("Esse número é divisível por 2")
    else: print("Esse número não é divisível por 2, 5 ou 10")


n = int(input("Digite um número"))

divisao()
'''

