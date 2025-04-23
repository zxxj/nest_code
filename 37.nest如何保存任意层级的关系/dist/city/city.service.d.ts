import { EntityManager } from 'typeorm';
export declare class CityService {
    entityManager: EntityManager;
    findAll(): Promise<number>;
}
