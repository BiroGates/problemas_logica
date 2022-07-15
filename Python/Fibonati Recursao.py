from pip import main


lista = []
newLista = []
index = 0
num = int(input("Qual a quantidade de expressoes que deseja ? : "))
for c in range(num):
    lista.append(c + 1)


def fib(l, i=0):
    if i == len(lista) - 1:
    
        newLista.append(l[i] + l[i - 1]) 
        print(newLista)
    
    elif i == 0:
        newLista.append(l[i])
        fib(l, i + 1)
    else:
        newLista.append(l[i] + l[i - 1])
        fib(l, i + 1)

fib(lista)