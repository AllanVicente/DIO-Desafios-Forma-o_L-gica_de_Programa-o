// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,

let saldoVitorias;
saldoVitorias = saldo(50,20);

function saldo(vitorias, derrotas){
    return vitorias - derrotas;
}

// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

let nivel;
// Se vitórias for menor do que 10 = Ferro
if (saldoVitorias < 10){
    nivel = "Ferro"
} 
// Se vitórias for entre 11 e 20 = Bronze
else if(saldoVitorias > 10 && saldoVitorias <= 20) {
    nivel = "Bronze"
// Se vitórias for entre 21 e 50 = Prata
} 
else if(saldoVitorias > 21 && saldoVitorias <= 50) {
    nivel = "Prata"
}
// Se vitórias for entre 51 e 80 = Ouro
else if(saldoVitorias > 51 && saldoVitorias <= 80) {
    nivel = "Ouro"
}
// Se vitórias for entre 81 e 90 = Diamante
else if(saldoVitorias > 81 && saldoVitorias <= 90) {
    nivel = "Diamante"
}
// Se vitórias for entre 91 e 100= Lendário
else if(saldoVitorias > 91 && saldoVitorias <= 100) {
    nivel = "Lendário"
}
// Se vitórias for maior ou igual a 101 = Imortal
else {
    nivel = "Imortal"
}
// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
console.log(`O Herói tem de saldo ${saldoVitorias} vitórias e está no nível ${nivel}`)