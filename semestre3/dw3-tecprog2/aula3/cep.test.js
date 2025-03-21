"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cep_1 = __importDefault(require("./cep"));
const globals_1 = require("@jest/globals");
(0, globals_1.test)("CEP Válido - 12345678", () => {
    (0, globals_1.expect)((0, cep_1.default)("12345678")).toBe(true);
});
(0, globals_1.test)("CEP Válido 12345-678", () => {
    (0, globals_1.expect)((0, cep_1.default)("12345-678")).toBe(true);
});
(0, globals_1.test)("CEP Inválido 1234567", () => {
    (0, globals_1.expect)((0, cep_1.default)("1234567")).toBe(false);
});
(0, globals_1.test)("CEP Inválido 1234567890", () => {
    (0, globals_1.expect)((0, cep_1.default)("1234567890")).toBe(false);
});
