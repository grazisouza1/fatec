const pessoa1 = {
    nome: "Pessoa 1",
    idade: 20,
    hobbies:  ['Ler', 'Ouvir música', 'Atividades físicas']
}

console.log(pessoa1.nome)
pessoa1.cpf = 123.456
pessoa1.hobbies.push('Outra atividade')
console.log(pessoa1)

function criarPessoa(nome, idade, hobbies){
    return{
        nome,
        idade,
        hobbies
    }
}

let pessoa2 = criarPessoa('Graziella', 18, ['Ler', 'Atividades Físicas', 'Ouvir música'])
let pessoa2Json = JSON.stringify(pessoa2)
console.log(pessoa2Json)
const pessoaJson = JSON.parse('{"nome":"Nome2","idade":25,"hobbies":["a","b","c"]}')
console.log(pessoaJson)  

class Pessoa {
    constructor(nome, idade, hobbies){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies 
        this.cpf = ''
    }

    meApresentar(){
        console.log(`Olá, meu nome é ${this.nome}`)
    }

    anoNascimento(){
        return 2024 - this.idade
    }
}

const hosana = new Pessoa ('Hosana', 20, ['Rolê em SP', 'Programar em Python', 'Crossfit'])
console.log(hosana)
