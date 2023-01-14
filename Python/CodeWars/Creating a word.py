def recur(l,i,w):
    if i >= len(l):
        return w
    else:
        print(w)
        return recur(l, i+1, w+l[i])


nword = ''
lista = ['m', 'a', 'c', 'a']
iter = 0

print(recur(lista, iter, nword))
    