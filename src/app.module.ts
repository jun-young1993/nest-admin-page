import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPageModule } from './admin-page/admin-page.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '158.180.82.177',
      port: 3306,
      username: 'gpt',
      password: 'gpt',
      database: 'nest-nexus',
      entities: [],
      synchronize: true,
    }),
    AdminPageModule.forRoot({
      prifix: 'admin-page'
    })
  ],
})
export class AppModule {}