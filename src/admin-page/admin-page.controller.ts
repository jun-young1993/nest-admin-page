import { Controller, Get, OnModuleInit, Res } from "@nestjs/common";
import { AdminPageOption } from "./options/admin-page-module.option";
import * as express from 'express';
import { join } from "path";


export class AdminPageController {
    constructor(){}
    static createController(option: AdminPageOption) {
        @Controller(option.prifix)
        class DynamicAdminPageController implements OnModuleInit {
            public readonly buildPath: string;
            constructor(
           
            ){
                this.buildPath = join(__dirname, 'ui');
         
            }
            onModuleInit() {
                
                

                // 루트 경로에 정적 파일 서빙 설정
                // expressApp.use(
                //   '/static',
                //   express.static(join(this.buildPath, 'static'))
                // );
            }

            @Get('')
            hello(){
                return 'hello world'
            }

            @Get('admin')
            handleAdmin(@Res() res: express.Response){
                const filePath = join(this.buildPath, 'index.html');
                res.sendFile(filePath);
            }

            @Get('*')
            serverStaticFiles(@Res() res: express.Response) {
                // 정적 파일 서빙
                const staticFilePath = join(this.buildPath, 'index.html');
                res.sendFile(staticFilePath);
            }
        }
        return DynamicAdminPageController
    }
    

    
}