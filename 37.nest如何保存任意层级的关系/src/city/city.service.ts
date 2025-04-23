import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CityService {
  @InjectEntityManager()
  entityManager: EntityManager;

  async findAll() {
    // 1级
    // const city = new City();
    // city.name = '河北省';
    // await this.entityManager.save(city);
    // 2级
    // const cityChildren = new City();
    // cityChildren.name = '唐山市';
    // const parent = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '河北省',
    //   },
    // });
    // if (parent) {
    //   cityChildren.parent = parent;
    // }
    // await this.entityManager.save(City, cityChildren);
    // 1级
    // const city = new City();
    // city.name = '北京市';
    // await this.entityManager.save(city);
    // 2级
    // const cityChildren = new City();
    // cityChildren.name = '朝阳区';
    // const parnet = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '北京市',
    //   },
    // });
    // if (parnet) {
    //   cityChildren.parent = parnet;
    // }
    // await this.entityManager.save(City, cityChildren);
    // 3级
    // const cityChildren = new City();
    // cityChildren.name = '大鸭梨烤鸭';
    // const parent = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '朝阳区',
    //   },
    // });
    // console.log(parent);
    // if (parent) {
    //   cityChildren.parent = parent;
    // }
    // await this.entityManager.save(City, cityChildren);
    // return this.entityManager.getTreeRepository(City).findTrees();
    // findRoots是查询所有的根节点
    // return this.entityManager.getTreeRepository(City).findRoots();
    // findDescendantsTree是查询某个父节点的所有后代节点
    // const parent = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '北京市',
    //   },
    // });
    // return this.entityManager
    //   .getTreeRepository(City)
    //   .findDescendantsTree(parent as any);
    // findAncestorsTree是查询某个子节点的所有父节点
    // const city = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '大鸭梨烤鸭',
    //   },
    // });
    // return this.entityManager
    //   .getTreeRepository(City)
    //   .findAncestorsTree(city as any);
    // findAncestors、findDescendants就是用扁平结构返回
    // const city = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '北京市',
    //   },
    // });
    // return this.entityManager
    //   .getTreeRepository(City)
    //   .findAncestors(city as any);
    // find也是扁平结构返回
    // const city = await this.entityManager.findOne(City, {
    //   where: {
    //     name: '北京市',
    //   },
    // });
    // return this.entityManager.getTreeRepository(City).find(city as any);

    // 还可以调用 countAncestors 和 countDescendants 来计数
    const city = await this.entityManager.findOne(City, {
      where: {
        name: '北京市',
      },
    });

    return this.entityManager
      .getTreeRepository(City)
      .countDescendants(city as any);
  }
}
