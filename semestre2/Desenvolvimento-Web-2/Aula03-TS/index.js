"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function calcularArea(lado) {
    return lado * lado;
}
const numDigitado = Number(prompt("Digite um número: "));
const quadrado = calcularArea(numDigitado);
console.log(quadrado);
let texto = '';
const aluno = {
    nome: 'Teste',
    mediaFinal: 9,
    situacao: 'aprovado'
};
const aluno2 = {
    nome: 'Marta',
    mediaFinal: 9,
    situacao: 'aprovado'
    //situacao: 'saiu do curso' //Erro pq n é nenhum dos valores aplicados em 'type'
};
function alunoFactory(nome, mediaFinal) {
    let situacao;
    situacao = 'reprovado'; //'matando' o else
    if (mediaFinal > 6) {
        situacao = 'aprovado';
    }
    //Deixando o código mais limpo 'matando' o else
    return {
        nome,
        mediaFinal,
        situacao
    };
}
const aluno3 = alunoFactory('Teste 3', 9);
console.log(aluno3.situacao);
