import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Department } from './entity/Department';
import { Employee } from './entity/Employee';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'typeorm_test1',
  synchronize: true,
  logging: true,
  entities: [Department, Employee],
  migrations: [],
  subscribers: [],
<<<<<<< HEAD
  poolSize: 10,
  connectorPackage: 'mysql2',
  extra: {
    authPlugin: 'sha256_password',
  },
=======
>>>>>>> 6ee7985ae3369410044fb64ced872049f77acaa5
});
