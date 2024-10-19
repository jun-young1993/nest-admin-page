import { INestApplication, Module } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

@Module({})
export class AdminPageModule {
  static setup(path: string, app: INestApplication) {
    console.log('[path]', path);
    const reactBuildPath = join(__dirname, '..', 'ui', 'build');
    app.use(express.static(reactBuildPath));
    app.use(`/${path}`, (req: express.Request, res: express.Response) => {
      res.sendFile(join(reactBuildPath, 'index.html'));
    });
  }
}
