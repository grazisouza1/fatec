import PromptSync from 'prompt-sync'
const prompt = PromptSync()

function calcularArea(lado: number): number{
    return lado * lado
}

const numDigitado = Number(prompt("Digite um número: "))

const quadrado = calcularArea(numDigitado)
console.log(quadrado)

let texto = ''
//No typescript, no caso da variáve acima, ele não permite que ela, futuramente hospede um number, pq ela já foi 'firmada' como string

type situacao = 'aprovado' | 'reprovado'
//A variável 'situacao' só vai aceitar esses 2 tipos de valores

interface Aluno {
    nome: String
    mediaFinal: Number
    situacao: situacao
}

const aluno: Aluno = {
    nome: 'Teste',
    mediaFinal: 9,
    situacao: 'aprovado'
}

const aluno2: Aluno = {
    nome: 'Marta',
    mediaFinal: 9,
    situacao: 'aprovado'
    //situacao: 'saiu do curso' //Erro pq n é nenhum dos valores aplicados em 'type'
}

function alunoFactory(nome: string, mediaFinal: number): Aluno{
    let situacao: situacao
    situacao = 'reprovado' //'matando' o else
    if(mediaFinal > 6){
        situacao = 'aprovado'
    } 
    //Deixando o código mais limpo 'matando' o else

    return {
        nome,
        mediaFinal,
        situacao
    }
}

const aluno3 = alunoFactory('Teste 3', 9)
console.log(aluno3.situacao)