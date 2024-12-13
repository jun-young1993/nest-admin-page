import { Controller, Get, Inject, OnModuleInit } from "@nestjs/common";
import { AdminPageOption } from "../admin-page/options/admin-page-module.option";
import { DataSource } from "typeorm";


export class AdminPageApiController {
    constructor(){}
    static createController(option: AdminPageOption) {
        @Controller(`${option.prifix}-api`)
        class DynamicAdminPageApiController implements OnModuleInit {
            constructor(
                @Inject(DataSource) public readonly dataSource: DataSource
            ){
                this.dataSource = dataSource
            }

            onModuleInit() {
                console.log('DataSource initialized:', this.dataSource.isInitialized);
            }

            @Get('')
            getAllEntitiesWithDetails() {
                const entities = this.dataSource.entityMetadatas.map((meta) => ({
                    name: meta.name,
                    tableName: meta.tableName,
                    columns: meta.columns.map((column) => ({
                      name: column.propertyName,
                      databaseType: column.type, // 실제 SQL 타입
                      isNullable: column.isNullable, // 컬럼이 NULL을 허용하는지
                      default: column.default, // 기본값
                    })),
                }));
                return entities;
            }
        }
        return DynamicAdminPageApiController
    }
}