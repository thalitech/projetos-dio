nome = "Ana"
xp = 9001
nivel1 = "Ferro"
nivel2 = "Bronze"
nivel3 = "Prata"
nivel4 = "Ouro"
nivel5 = "Platina Diamante"
nivel6 = "Ascendente"
nivel7 = "Imortal"
nivel8 = "Radiante"

if xp <= 1000:
    print(f"O herói de nome {nome} está no nível de {nivel1}")
elif 1001 <= xp <= 2000:
    print(f"O herói de nome {nome} está no nível de {nivel2}")
elif 2001 <= xp <= 5000:
    print(f"O herói de nome {nome} está no nível de {nivel3}")
elif 6001 <= xp <= 7000:
    print(f"O herói de nome {nome} está no nível de {nivel4}")
elif 7001 <= xp <= 8000:
    print(f"O herói de nome {nome} está no nível de {nivel5}")
elif 8001 <= xp <= 9000:
    print(f"O herói de nome {nome} está no nível de {nivel6}")
elif 9001 <= xp <= 10000:
    print(f"O herói de nome {nome} está no nível de {nivel7}")
elif xp >= 10001:
    print(f"O herói de nome {nome} está no nível de {nivel8}")
else:
    print(f"O herói de nome {nome} está em um nível bem acima")
