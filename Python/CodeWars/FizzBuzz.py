def fizzBuzz(n):
    multTres = []
    multCinco = []
    
    # Criando uma lista com os multiplos desejados
    for c in range(n):
        for i in range(n):
            if c == 3:
                multTres.append(c * i)
            elif c == 5:
                multCinco.append(c * i)
    

    for c in range(n):
        if c != 0:
            if c in multCinco and c in multTres:
                print("FizzBuzz")
            elif c in multTres:
                print("Fizz")
            elif c in multCinco:
                print("Buzz")
            elif c not in multCinco or c not in multTres:
                print(c)


