"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//npm i express
const express_1 = __importDefault(require("express"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/pessoas', (req, res) => {
    const pessoa1 = new Pessoa_1.default('nome', 20, ['programar']);
    const pessoa2 = new Pessoa_1.default('Teste2', 25, ['a', 'b']);
    const listaPessoas = [pessoa1, pessoa2];
    res.json(listaPessoas);
});
app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
//npm i -D @types/express @types/node
