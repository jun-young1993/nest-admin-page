// main.ts
import { NestFactory } from '@nestjs/core';
import { AdminPageModule } from './admin-page.module';
import { INestApplication } from '@nestjs/common';
import {AppModule} from './app.module';
async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  // Admin 페이지 설정
  AdminPageModule.setup('admin', app);

  await app.listen(3001, () => {
    console.log('Admin Module running on http://localhost:3001/admin');
  });
}

bootstrap();