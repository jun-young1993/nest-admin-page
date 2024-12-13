import { DynamicModule, Inject, Module, OnModuleInit } from '@nestjs/common';
import { AdminPageController } from './admin-page.controller';
import { AdminPageOption } from './options/admin-page-module.option';
import { AdminPageApiModule } from '../admin-page-api/admin-page-api.module';

@Module({})
export class AdminPageModule implements OnModuleInit{
  constructor(
    // @Inject(AdminPageOption) private readonly options: AdminPageOption,
  ){}
  
  onModuleInit() {}

  static forRoot(options: AdminPageOption): DynamicModule {
    const dynamicAdminPageController = AdminPageController.createController(
      options
    )
    
    return {
      module: AdminPageModule,
      controllers: [dynamicAdminPageController],
      imports: [
        ...(options.typeorm ? [options.typeorm] : []),
        AdminPageApiModule.forRoot(options)
      ],
      providers: [
        {
          provide: AdminPageOption,
          useValue: options
        }
      ],
      exports: [AdminPageOption],
    }
  }
}
