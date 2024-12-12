import { DynamicModule, INestApplication, Inject, Module, OnModuleInit } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';
import { AdminPageController } from './admin-page.controller';
import { AdminPageOption } from './options/admin-page-module.option';
import { HttpAdapterHost } from '@nestjs/core';

@Module({})
export class AdminPageModule implements OnModuleInit{
  constructor(
    @Inject(AdminPageOption) private readonly options: AdminPageOption,
    private readonly httpAdapterHost: HttpAdapterHost
  ){
    console.log(httpAdapterHost)
  }
  onModuleInit() {
    console.log('on moule init', this.options.prifix, this.httpAdapterHost)
  }

  static forRoot(options: AdminPageOption): DynamicModule {
    const dynamicController = AdminPageController.createController(
      options
    )
    
    return {
      module: AdminPageModule,
      controllers: [dynamicController],
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
