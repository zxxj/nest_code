import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './user/user.service';
import { Request } from 'express';
import { Permisstion } from './user/entities/permisstion.entity';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermisstionGuard implements CanActivate {
  @Inject(UserService)
  private userSerivce: UserService;

  @Inject(Reflector)
  private reflector: Reflector;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    console.log(this.userSerivce);

    const request: Request = context.switchToHttp().getRequest();

    if (!request.user) {
      return true;
    }

    const roles = await this.userSerivce.findRolesByIds(
      request.user.roles.map((item) => item.id),
    );

    const permisstions: Permisstion[] = roles.reduce((total: any, current) => {
      total.push(...current.permisstions);
      return total;
    }, []);

    console.log(permisstions);

    const requiredPermissions = this.reflector.getAllAndOverride<string[]>(
      'require-permission',
      [context.getClass(), context.getHandler()],
    );

    for (let i = 0; i < requiredPermissions.length; i++) {
      const curPermission = requiredPermissions[i];
      const found = permisstions.find((item) => item.name === curPermission);
      if (!found) {
        throw new UnauthorizedException('您没有访问该接口的权限');
      }
    }

    console.log(requiredPermissions);

    return true;
  }
}
