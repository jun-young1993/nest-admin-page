import { DynamicModule, Inject, Module, OnModuleInit } from '@nestjs/common';
import { AdminPageOption } from '../admin-page/options/admin-page-module.option';
import { AdminPageApiController } from './admin-page-api.controller';

@Module({})
export class AdminPageApiModule implements OnModuleInit{
  constructor(){}
  
  onModuleInit() {}

  static forRoot(options: AdminPageOption): DynamicModule {
    const dynamicAdminPageApiController = AdminPageApiController.createController(
      options
    )
    
    return {
      module: AdminPageApiModule,
      controllers: [dynamicAdminPageApiController],
    }
  }
}
