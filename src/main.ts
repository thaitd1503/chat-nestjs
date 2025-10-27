import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
declare const module: any;
import * as dotenv from 'dotenv';
import { AuthenticatedSocketIoAdapter } from '../middleware';
// import { Middleware } from '../middleware';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Thaitd Project API')
    .setDescription('The Project build by Thaitd')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // app.use(new Middleware().use);

  app.useWebSocketAdapter(new AuthenticatedSocketIoAdapter(app));

  app.enableCors();

  await app.listen(9999);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
