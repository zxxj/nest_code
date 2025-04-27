import { AppService } from './app.service';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    private jwtService;
    test(authorizazion: string, response: Response): any;
    getHello(): string;
}
