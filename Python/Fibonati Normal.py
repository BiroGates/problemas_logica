l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
nl = [] 
def fib(lista):
    for c in range(len(lista)):
        if c == 0:
            nl.append(lista[c])
        else:
            nl.append(lista[c] + lista[c - 1])
    print(nl)
fib(l)