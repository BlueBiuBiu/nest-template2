import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorators/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    console.log('roles', roles);

    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    console.log('request =========>', request.user);
    const user = request.user;
    return true;
    // return matchRoles(roles, user.roles);
  }
}
