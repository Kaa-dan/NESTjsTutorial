import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    return this.userService.findAll(role);
  }
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }
  @Post()
  create(
    @Body()
    user: {
      name: string;
      role: 'INTERN' | 'ENGINEER' | 'ADMIN';
      email: string;
    },
  ) {
    return this.userService.create(user);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() userUpdate: {}) {
    return this.userService.update(id, userUpdate);
  }
  @Delete(':id')
  deleteOne(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
