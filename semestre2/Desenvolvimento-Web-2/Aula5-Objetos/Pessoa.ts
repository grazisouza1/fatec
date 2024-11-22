//npm init -y
//npm i -D typescript
//npx tsc --init
//npx tsc para criar um arquivo js

export default class Pessoa{
    nome: string | string[] | null //Nesse caso, é necessário usar o cinstructor. Não seria necessãrio se as variáveis já viessem com um valor pré definido. Por exemplo: nome: ''.
    idade: number
    hobbies: string[]

    constructor(nome: string, idade: number, hobbies: string[]){
        this.nome = nome
        this.idade = idade
        this.hobbies = hobbies
    }
}
