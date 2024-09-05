class formaDeBolo{
    constructor(saborDaMassa, saborDoRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborDoRecheio = saborDoRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborDoRecheio}`)
    }

    assar(){
        console.log("bolo assando de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDeBolo("chocolate","nutella")
let boloPremium = new formaDeBolo("baunilha","coco")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()