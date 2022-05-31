def fator(n):
    if n == 1:
        return n
    else:
        print(n)
        return n * fator(n - 1)

print(fator(5))