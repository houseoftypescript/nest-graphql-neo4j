import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';
import helmet from 'helmet';
import { dump } from 'js-yaml';
import { AppModule } from './app.module';
import environments from './common/environments/environments';

const swaggerify = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Nest.js - GraphQL - Template')
    .setDescription('Nest.js - GraphQL - Template')
    .setVersion('1.0')
    .addTag('GraphQL')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  const swaggerPath = './docs/swagger';
  const json = JSON.stringify(document, null, 2);
  writeFileSync(`${swaggerPath}/swagger.json`, json);
  const yaml: string = dump(document);
  writeFileSync(`${swaggerPath}/swagger.yaml`, yaml);
  return document;
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  if (environments.environment === 'development') swaggerify(app);
  await app.listen(environments.port);
}
bootstrap();
