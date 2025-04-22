import { AppDataSource } from './data-source';
import { Department } from './entity/Department';
import { Employee } from './entity/Employee';

AppDataSource.initialize()
  .then(async () => {
    const d1 = new Department();
    d1.name = '研发部';

    const e1 = new Employee();
    e1.name = 'zxx';
    e1.department = d1;

    const e2 = new Employee();
    e2.name = 'kobe';
    e2.department = d1;

    // await AppDataSource.manager.save(Department, d1);
    await AppDataSource.manager.save(Employee, [e1, e2]);
  })
  .catch((error) => console.log(error));
