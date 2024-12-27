import { Controller, Inject, Get, Param, BadRequestException } from "@nestjs/common";
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
                        isPrimary: column.isPrimary,
                        name: column.propertyName,
                        databaseType: column.type, // 실제 SQL 타입
                        isNullable: column.isNullable, // 컬럼이 NULL을 허용하는지
                        default: column.default, // 기본값
                    })),
                }));
                return entities;
            }

            @Get('record/:table')
            async getRecord(@Param('table') table: string){
                try {
                    const queryRunner = this.dataSource.createQueryRunner();
                    await queryRunner.connect();
                    const records = await queryRunner.query(`SELECT * FROM ${table}`);
                    await queryRunner.release();
                    return records;
                  } catch (error) {
                    throw new BadRequestException(`Error querying table ${table}: ${error?.toString()}`);
                  }
            }
        }

        return DynamicTypeormController
    }
}