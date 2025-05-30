"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pizza_class_1 = __importDefault(require("./pizza.class"));
class PizzaQueijo extends pizza_class_1.default {
    constructor() {
        super();
        this.descricao = "Pizza de Queijo";
        this.preco = 22;
    }
    getDescricao() {
        return this.descricao;
    }
    getPreco() {
        return this.preco;
    }
}
exports.default = PizzaQueijo;
