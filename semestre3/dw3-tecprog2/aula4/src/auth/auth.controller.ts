import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login') //Usa o método post, e usa a rota /login
  async login(@Body() body: { email: string; password: string }) {
    //Body sinaliza o que é o corpo da requisição (o que o body vai entregar)
    if (!body.email || !body.password) {
      //Garantir que o dado chegou
      return { message: 'Informe e-mail e senha' };
    }

    const user = await this.authService.validateUser(body.email, body.password); //Chama o authService para validar o user usando os parâmetros email e password

    if (user) {
      return this.authService.login(user);
    }

    return { message: 'E-mail ou senha inválidos' };
  }
}
