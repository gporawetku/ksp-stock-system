import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // URL ของ Next.js
    methods: 'GET,HEAD,POST',
    credentials: true,
  });

  await app.listen(3001);
}
bootstrap();
