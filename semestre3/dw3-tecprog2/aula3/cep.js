"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verificaCep;
function verificaCep(cep) {
    const cepLimpo = cep.replace("-", ""); //cep.replae(/\D/g, "") ==> Regex. Nesse caso, qualquer caractere diferente colocado vai ser substituído por ""(vazio)
    if (cep.length < 8) {
        return false;
    }
    return true;
}
