import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import environments from './common/environments/environments';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(environments.port);
}
bootstrap();
