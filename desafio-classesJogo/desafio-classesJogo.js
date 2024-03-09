class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    attack() {
        let attackType
        let attackMessage
        switch(this.type) {
            case "mago":
                attackType = "magia"
                attackMessage = `O ${this.type} atacou usando ${attackType}!`
            break
            case "guerreiro":
                attackType = "espada"
                attackMessage = `O ${this.type} atacou usando ${attackType}!`
            break
            case "monge":
                attackType = "artes marciais"
                attackMessage = `O ${this.type} atacou usando ${attackType}!`
            break
            case "ninja":
                attackType = "shuriken"
                attackMessage = `O ${this.type} atacou usando ${attackType}!`
            break
            default:
                attackMessage = `Tipo de herói inválido! Não foi possível atacar!`
        }
        console.log(attackMessage)
    }
}

let player1 = new hero("Ju", 22, "mago")
let player2 = new hero("Ri", 24, "monge")
let player3 = new hero("Fe", 27, "ninja")
let player4 = new hero("Bi", 30, "guerreiro")

player1.attack()
player2.attack()
player3.attack()
player4.attack()
