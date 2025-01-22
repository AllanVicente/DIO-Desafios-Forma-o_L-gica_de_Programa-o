// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

class Personagem{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)
    ataques = {
        mago: "magia",            // O tipo 'mago' tem o ataque 'magia'
        guerreiro: "espada",      // O tipo 'guerreiro' tem o ataque 'espada'
        monge: "artes marciais",  // O tipo 'monge' tem o ataque 'artes marciais'
        ninja: "shuriken"         // O tipo 'ninja' tem o ataque 'shuriken'
    };

    atacar() {
        // Verifica se o tipo é válido
        if (this.ataques[this.tipo]) {
            console.log(`O ${this.tipo} chamado ${this.nome} atacou usando ${this.ataques[this.tipo]}`);
        } else {
            console.log(`Tipo de personagem inválido!`);
        }
    }

}


// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada
 
let mago = new Personagem("Merlin","60", "mago");
let guerreiro = new Personagem("Konan","30", "guerreiro");
let monge = new Personagem("Ghandi","60", "monge");
let ninja = new Personagem("Akali","25", "ninja");
let desconhecido = new Personagem("Desconhecido", "40", "desconhecido");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
desconhecido.atacar();