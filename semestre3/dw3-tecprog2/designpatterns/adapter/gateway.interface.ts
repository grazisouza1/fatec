interface Gateway {
  setValor(valor: number): void; //Number é o tipo de valor que ela vai receber e void o tipo de valor que vai retornar
  setParcelas(parcelas: number): void;
  setNumeroCartao(numeroCartao: string): void;
  setCVV(cvv: string): void;
  validarCartao(): boolean;
  realizarPagamento(): boolean;
}
