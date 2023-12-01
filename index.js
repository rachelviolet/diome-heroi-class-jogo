class Heroi {
    constructor (nome, idade, classe, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
        this.tipo = tipo;
    }
    ataque() {
        switch (this.classe) {
            case "Mago":
                this.tipo = "magia"
                break;
            case "Guerreiro":
                this.tipo = "espada"
                break;
            case "Monge":
                this.tipo = "artes marciais"
                break;
            case "Ninja":
                this.tipo = "shuriken"
                break;
            default:
                this.tipo = "???";
        }
        console.log(`O ${this.nome} atacou usando ${this.tipo}`);
    }
        
}
var hero1 = new Heroi("Gerald III", 14, "Mago");
var hero2 = new Heroi("Edward", 27, "Guerreiro");
var hero3 = new Heroi("Fredrick", 19, "Monge");
var hero4 = new Heroi("Lee", 11, "Ninja");
var hero5 = new Heroi("João", 34);
hero1.ataque();
hero2.ataque();
hero3.ataque();
hero4.ataque();
hero5.ataque();