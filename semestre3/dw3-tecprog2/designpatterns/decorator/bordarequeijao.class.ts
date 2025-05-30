import AcrescimoDecorator from "./acrescimodecorator.class";
import Pizza from "./pizza.class";

export default class BordaRequeijao extends AcrescimoDecorator {
  public getDescricao(): string {
    return this.pizza.getDescricao() + "Borda Requeijão";
  }

  public getPreco(): number {
    return this.pizza.getPreco() + 8.5;
  }
}
