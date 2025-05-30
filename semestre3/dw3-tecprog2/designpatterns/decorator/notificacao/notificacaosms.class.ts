import Notificacao from "./notificacao.class";
import NotificacaoDecorator from "./notificacaodecorator.class";

export default class NotificacaoSMS extends Notificacao {
    enviar(msg: string): void {this.notificacao.enviar(msg)
        console.log('Enviado E-mail')
    }
}
