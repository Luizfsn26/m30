class Pessoa {
    constructor(public nome: string, public idade: number) {}
}


class Estudante extends Pessoa {
    constructor(nome: string, idade: number, public matricula: string, public curso: string) {
        super(nome, idade);
    }
}


const estudante = new Estudante('Alice', 20, '12345', 'Ciência da Computação');


console.log(estudante.nome);
console.log(estudante.curso);
