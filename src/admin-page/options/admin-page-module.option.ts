import { DynamicModule, ForwardReference, Type } from "@nestjs/common";
import { AdminPageModuleOptionInterface } from "../interfaces/admin-page-module.interface";

type Module = (Type<any> | DynamicModule | Promise<DynamicModule> | ForwardReference<any>)
export class AdminPageOption implements AdminPageModuleOptionInterface{
    constructor(
        public readonly prifix: string,
        public readonly typeorm?: Module
    ){}
}