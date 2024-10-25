import {
  Controller,
  Get,
  ParseArrayPipe,
  Query,
  Redirect,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginDto } from './auth/auth.dto';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/role.guard';
import { User } from './decorators/user.decorator';
import { Auth } from './decorators/auth.decorator';
import { ConfigService } from '@nestjs/config';
import { Public } from './decorators/public.decorator';

@ApiTags('cats')
// @UseGuards(RolesGuard)
@Controller('cats')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private configService: ConfigService,
  ) {}

  @Get()
  @Roles(['admin'])
  getHello(@Query() loginDto: LoginDto) {
    console.log('loginDto', this.configService.get('PORT'));
    return loginDto;
  }

  @Get('/1')
  async findOne(@User('firstName') firstName: string) {
    console.log(`Hello ${firstName}`);
  }

  @Get('/user')
  @Public()
  @Auth('admin')
  findAllUsers() {
    console.log('0--0');
  }
}
