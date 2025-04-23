"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
function getArea() {
    var area = parseFloat(prompt("Qual o tamanho da \u00E1rea (em metros quadrados) que deseja pintar? "));
    if (isNaN(area) || area < 0) {
        console.log("Por favor, insira um número válido");
        return 0;
    }
    else {
        return area;
    }
}
var area = getArea();
var litros = area / 6;
if (area > 0) {
    console.log("Voc\u00EA vai precisar de: \n == ".concat(litros, " litros de tinta =="));
}
var lata = 0;
var galao = 0;
function calcQntd() {
    for (var i = 0; litros >= 18; i++) {
        litros -= 18;
        lata++;
    }
    for (var i = 0; litros > 0; i++) {
        litros -= 3.6;
        galao++;
    }
    return console.log("Voc\u00EA precisa comprar:\n \n    ".concat(lata, " latas de 18L = R$").concat(lata * 80, " \n \n    ").concat(galao, " gal\u00F5es de 3,6L = R$").concat(galao * 25, " \n\n    GASTO TOTAL: R$").concat(lata * 80 + galao * 25));
}
calcQntd();
