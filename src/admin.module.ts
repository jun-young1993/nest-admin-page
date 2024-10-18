import { Module } from '@nestjs/common';
import { join } from 'path';

@Module({})
export class AdminModule {
  static setup(path: string, app: any) {
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');

    app.use(path, (req, res) => {
      res.render('admin', { message: 'Welcome to Admin Page' });
    });
  }
}
