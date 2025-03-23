"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/tabuada/:numero", (req, res) => {
    const numero = parseInt(req.params.numero);
    const tabuada = {};
    for (let i = 1; i <= 10; i++) {
        tabuada[`${numero} x ${i}`] = numero * i;
    }
    res.json(tabuada);
});
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
