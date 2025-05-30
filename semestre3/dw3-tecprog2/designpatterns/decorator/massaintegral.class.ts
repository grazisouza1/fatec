import AcrescimoDecorator from "./acrescimodecorator.class";
import Pizza from "./pizza.class";

export default class MassaIntegral extends AcrescimoDecorator {
  public getDescricao(): string {
    return this.pizza.getDescricao() + "Massa Integral";
  }

  public getPreco(): number {
    return this.pizza.getPreco() + 5;
  }
}
