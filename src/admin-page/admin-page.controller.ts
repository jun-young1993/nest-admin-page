import { Controller, Get, OnModuleInit, Param, Req, Res } from "@nestjs/common";
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
            onModuleInit() {}

            @Get('')
            hello(){
                return 'hello world'
            }

            @Get('admin')
            handleAdmin(@Res() res: express.Response){
                const filePath = join(this.buildPath, 'index.html');
                res.sendFile(filePath);
            }

            @Get('/static/*')
            serverStaticFiles(
                @Req() req: express.Request,
                @Res() res: express.Response
            ) {
                try {
                    const originalPath = [...req.path.split('/').filter(Boolean)]
                    originalPath.shift()
                    // // 정적 파일 서빙
                    const staticFilePath = join(this.buildPath, ...originalPath);
                    res.sendFile(staticFilePath);
                } catch( error ){
                    res.status(500).send(error?.toString());
                }
            }
            @Get(':fileName(.+\\.(json|png))$')
            assetsFile(
                @Param('fileName') fileName: string,
                @Res() res: express.Response
            ){
                try {
                    console.log(fileName)
                    // // 정적 파일 서빙
                    const staticFilePath = join(this.buildPath, fileName);
                    res.sendFile(staticFilePath);
                } catch( error ){
                    res.status(500).send(error?.toString());
                }
            }
        }
        return DynamicAdminPageController
    }
}