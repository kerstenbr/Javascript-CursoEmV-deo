let amigo = {
    nome: "Jóse",
    peso: 80.0,
    engordar(p=0){
        console.log("engordou")
        this.peso += p
    }
}

amigo.engordar(8)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)