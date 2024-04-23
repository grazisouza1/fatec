x = input("Digite um dos valores: liquido, solido ou vapor = ")
print("")
print("Valor digitado pelo usuário = " +x)

if (x == "liquido"):
    print("Menos de 100 graus centigrados")

elif (x == "vapor"):
    print("Mais de 100 graus centigrados")

else:
    print("Menos de 0 graus centigrados")