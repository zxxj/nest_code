import { DbModuleOptions } from './db.module';
export declare class DbService {
    private readonly options;
    constructor(options: DbModuleOptions);
    read(): Promise<any>;
    write(obj: Record<string, any>): Promise<void>;
}
