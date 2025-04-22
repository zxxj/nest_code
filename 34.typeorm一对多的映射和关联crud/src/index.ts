import { AppDataSource } from './data-source';
import { Department } from './entity/Department';
import { Employee } from './entity/Employee';

AppDataSource.initialize()
  .then(async () => {
<<<<<<< HEAD
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
=======
    // 新增
    const e1 = new Employee();
    e1.name = '张三';

    const e2 = new Employee();
    e2.name = '李四';

    const d1 = new Department();
    d1.name = '研发部';
    d1.employees = [e1, e2];

    // AppDataSource.manager.save(Department, d1); // 如果设置了cascade,那就只需要保存employee就好了,deparment会自动级联保存
    // AppDataSource.manager.save(Department, d1);

    // 查询
    const depts = await AppDataSource.manager.find(Department);
    // console.log(depts);

    // 关联查询
    // const deptsRelation = await AppDataSource.manager.find(Department, {
    //   relations: {
    //     employees: true,
    //   },
    // });
    // console.log(deptsRelation);
    // console.log(deptsRelation.map((item) => item.employees));

    // 这个relations其实就是left join on,或者通过 query builder 来手动关联
    const es = await AppDataSource.manager
      .getRepository(Department)
      .createQueryBuilder('d')
      .leftJoinAndSelect('d.employees', 'e')
      .getMany();
    console.log(es);
    console.log(es.map((item) => item.employees));

    // 也可以直接用 EntityManager 来创建 query builder
    const es2 = await AppDataSource.manager
      .createQueryBuilder(Department, 'd')
      .leftJoinAndSelect('d.employees', 'e')
      .getMany();

    console.log(es2);
    console.log(es2.map((item) => item.employees));

    // 删除的话,需要先把关联的 employee 删了,再删除 department
    // 当然，如果你设置了 onDelete 为 SET NULL 或者 CASCADE那就不用自己删 employee 了，只要删了 department，mysql 会自动把关联的 employee 记录删除，或者是把它们的外键 id 置为空。
    const deps = await AppDataSource.manager.find(Department, {
      relations: {
        employees: true,
      },
    });
    await AppDataSource.manager.delete(Employee, deps[0].employees);
    await AppDataSource.manager.delete(Department, deps[0].id);
>>>>>>> 6ee7985ae3369410044fb64ced872049f77acaa5
  })
  .catch((error) => console.log(error));
