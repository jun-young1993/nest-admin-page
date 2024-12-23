import { Controller, Inject, Get } from "@nestjs/common";
import { AdminPageOption } from "../admin-page/options/admin-page-module.option";
import { DataSource } from "typeorm";

export class TypeormController {
    constructor(){}
    static createController(option: AdminPageOption){
        @Controller(`${option.prifix}/typeorm`)
        class DynamicTypeormController {
            constructor(
                @Inject(DataSource) public readonly dataSource: DataSource
            ){
                this.dataSource = dataSource
            }

            @Get('table')
            getAllTableNames() {
                const tables = this.dataSource.entityMetadatas.map((meta) => meta.tableName);
                return tables;
            }

            @Get('entity')
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

        return DynamicTypeormController
    }
}