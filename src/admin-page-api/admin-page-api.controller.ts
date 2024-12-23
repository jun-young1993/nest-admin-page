import { Controller, Get, Inject, OnModuleInit } from "@nestjs/common";
import { AdminPageOption } from "../admin-page/options/admin-page-module.option";
import { DataSource } from "typeorm";


export class AdminPageApiController {
    constructor(){}
    static createController(option: AdminPageOption) {
        @Controller(`${option.prifix}/api`)
        class DynamicAdminPageApiController implements OnModuleInit {
            constructor(
                @Inject(DataSource) public readonly dataSource: DataSource
            ){
                this.dataSource = dataSource
            }

            onModuleInit() {
                console.log('DataSource initialized:', this.dataSource.isInitialized);
            }
        }
        return DynamicAdminPageApiController
    }
}