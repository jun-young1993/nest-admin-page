// main.ts
import { NestFactory } from '@nestjs/core';
import { AdminPageModule } from './admin-page/admin-page.module';
import { INestApplication } from '@nestjs/common';
import { AppModule } from './app.module';
async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  await app.listen(3001, () => {
    console.log('Admin Module running on http://localhost:3001/admin');
  });
}

bootstrap();