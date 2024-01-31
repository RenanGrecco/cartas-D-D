export class Personagem {
    nome
    mana = 100
    vida = 100
    #level
    tipo
    descricao

    constructor(nome) {
        this.nome = nome
        this.#level = 1
    }

    aumentarLevel(){
        this.level += 1
    }

    diminuirLevel(){
        this.level -= 1
    }

    get level() {
        return this.#level
    }

    set level(novoLevel) {
        if(novoLevel >= 1 && novoLevel <= 15) {
            this.#level = novoLevel
        }
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `${this.constructor.tipo} Implacavel`
        }
        return `${this.constructor.tipo} iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.level === personagem2.level) {
            return 'Empate!'
        }
        if (personagem1.level > personagem2.level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor!`
        }
        return `${personagem2.constructor.tipo} ${personagem2.constructor.tipo} é o vencedor!`
    }
}