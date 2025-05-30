import Pizza from "./pizza.class";

export default class PizzaQueijo extends Pizza {
  constructor() {
    super();
    this.descricao = "Pizza de Queijo";
    this.preco = 22;
  }

  public getDescricao(): string {
    return this.descricao;
  }

  public getPreco(): number {
    return this.preco;
  }
}
