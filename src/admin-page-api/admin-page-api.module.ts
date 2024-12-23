import { DynamicModule, Inject, Module, OnModuleInit } from '@nestjs/common';
import { AdminPageOption } from '../admin-page/options/admin-page-module.option';
import { AdminPageApiController } from './admin-page-api.controller';
import { TypeormController } from '../typeorm/typeorm.controller';

@Module({})
export class AdminPageApiModule implements OnModuleInit{
  constructor(){}
  
  onModuleInit() {}

  static forRoot(options: AdminPageOption): DynamicModule {
    const dynamicAdminPageApiController = AdminPageApiController.createController(
      options
    )
    const dynamicTypeormController = TypeormController.createController(
      options
    )
    
    return {
      module: AdminPageApiModule,
      providers: [
        {
          provide: AdminPageOption,
          useValue: options,
        },
      ],
      exports: [AdminPageOption],
      controllers: [dynamicAdminPageApiController, dynamicTypeormController],
    }
  }
}
