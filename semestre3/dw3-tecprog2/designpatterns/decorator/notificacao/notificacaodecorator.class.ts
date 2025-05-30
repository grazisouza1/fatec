import Notificacao from "./notificacao.class";

export default abstract class NotificacaoDecorator extends Notificacao {
  protected notificacao: Notificacao;

  constructor(notificacao: Notificacao) {
    super();
    this.notificacao = notificacao;
  }

  abstract enviar(msg: string): void;
}
