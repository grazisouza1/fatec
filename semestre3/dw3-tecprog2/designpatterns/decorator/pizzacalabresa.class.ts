import Pizza from "./pizza.class";

class PizzaCalabresa extends Pizza {
  constructor() {
    super();
    this.descricao = "Pizza de Calabresa";
    this.preco = 25;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getPreco(): number {
    return this.preco;
  }
}
