def calculando_rankeadas(vitorias, derrotas):
    s_vitorias = vitorias - derrotas
    print("Saldo de Rankeadas é:", s_vitorias)
    return s_vitorias

def ver_nivel(xp):
    if xp <= 10:
        nivel = "Ferro"
    elif 11 <= xp <= 20:
        nivel = "Bronze"
    elif 21 <= xp <= 50:
        nivel = "Prata"
    elif 51 <= xp <= 80:
        nivel = "Ouro"
    elif 81 <= xp <= 90:
        nivel = "Diamante"
    elif 91 <= xp <= 100:
        nivel = "Lendário"
    elif xp >= 101:
        nivel = "Imortal"
    else:
        print("Não encontrado")
        nivel = None

    return nivel

saldo_vitorias = calculando_rankeadas(5000, 2000)
nivel = ver_nivel(9)
print(f"O Herói tem de saldo de {saldo_vitorias} está no nível de {nivel}")