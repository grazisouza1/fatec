import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //Transforma os dados de entrada para o tipo correto
      whitelist: true, //Remove campos que não estão no DTO
      forbidNonWhitelisted: true, //Retorna erro se tiver campos que não estão no DTO
    }),
  );
  await app.listen(3000);
}
bootstrap();
