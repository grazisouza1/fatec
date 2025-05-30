import Notificacao from "./notificacao.class";

export default class NotificacaoSimples implements Notificacao {
  public enviar(msg: string): void {
    console.log("Notificação simples: " + msg);
  }
}
