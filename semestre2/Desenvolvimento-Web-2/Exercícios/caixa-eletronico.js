function sacar(valor) {
    if (valor % 10 !== 0) {
        return "Valor inválido. Insira um valor múltiplo de 10."
    }
let nota100 = 0;
let nota50 = 0;
let nota10 = 0;

nota100 = Math.floor(valor / 100);  
valor = valor - (nota100 * 100);
nota50 = Math.floor(valor / 50);  
valor = valor - (nota50 * 50);
nota10 = Math.floor(valor / 10);
return `Notas de 100: ${nota100}, Notas de 50: ${nota50}, Notas de 10: ${nota10}`;}
console.log(sacar(380));  