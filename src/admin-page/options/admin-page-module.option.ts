import { AdminPageModuleOptionInterface } from "../interfaces/admin-page-module.interface";

export class AdminPageOption implements AdminPageModuleOptionInterface{
    constructor(
        public readonly prifix: string
    ){}
}