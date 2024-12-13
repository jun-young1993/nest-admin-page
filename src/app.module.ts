import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminPageModule } from './admin-page/admin-page.module';
import { Code } from './example/entities/code.entity';

@Module({
  imports: [
    AdminPageModule.forRoot({
      prifix: 'admin-page',
      typeorm: TypeOrmModule.forRoot({
        type: 'mysql',
        host: '158.180.82.177',
        port: 3306,
        username: 'gpt',
        password: 'gpt',
        database: 'nest-nexus',
        entities: [Code],
        synchronize: true,
      })
    })
  ],
})
export class AppModule {}