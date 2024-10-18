import { INestApplication, Module } from '@nestjs/common';
import * as express from 'express';

@Module({})
export class AdminModule {
  static setup(path: string, app: INestApplication) {
    app.use(`/${path}`, (req: express.Request, res: express.Response) => {
      return res.send('Welcome to Admin Page');
    });
  }
}
