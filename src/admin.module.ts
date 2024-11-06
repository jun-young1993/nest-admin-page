import { INestApplication, Module } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

@Module({})
export class AdminModule {
  static setup(path: string, app: INestApplication) {
    const reactBuildPath = join(__dirname, '..', 'ui', 'build');
    
    app.use(express.static(reactBuildPath));
    app.use(`/${path}`, (req: express.Request, res: express.Response) => {
      res.sendFile(join(reactBuildPath, 'index.html'));
    });
  }
}

