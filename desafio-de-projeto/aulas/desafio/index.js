class propriedadeHeroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }


    atacar() {

        let heroi = {
            nome: "Felipe",
            idade: 28,
            tipo: {
                0: ["Guerreiro", "Mago", "Monge","Ninja"]
            },
            ataque: {
                0: ["Espada","Magia","ArtesMarciais","Shuriken"]
            }
        }

        for (let index in heroi.tipo) {
            let [heroiTipo] = heroi.tipo[index]

            for (let i in heroi.ataque) {
                let [heroiAtaque] = heroi.ataque[i]

                if (heroiTipo === "Mago" && heroiAtaque === "Magia") {
                    console.log(`o ${heroiTipo} atacou usando ${heroiAtaque}`)
                }

                if (heroiTipo === "Guerreiro" && heroiAtaque === "Espada") {
                    console.log(`o ${heroiTipo} atacou usando ${heroiAtaque}`)
                }
                if (heroiTipo === "Monge" && heroiAtaque === "ArtesMarciais") {
                    console.log(`o ${heroiTipo} atacou usando ${heroiAtaque}`)
                }
                if (heroiTipo === "Ninja" && heroiAtaque === "Shuriken") {
                    console.log(`o ${heroiTipo} atacou usando ${heroiAtaque}`)
                }
            }

        }
    }

}

let aventuraDoHeroi = new propriedadeHeroi()
aventuraDoHeroi.atacar()

