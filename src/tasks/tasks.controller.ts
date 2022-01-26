import { Get, Post, Patch, Param, Controller, Delete } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  findAll() {
    console.log('This route uses getting all tasks');
    return 'This route uses getting all tasks';
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return 'This action gets a task';
  }

  @Post()
  create() {
    return 'This action adds a new task';
  }

  @Delete('/:id')
  removeTask(@Param('id') id: string) {
    return 'This action removes a task';
  }

  @Patch('/:id')
  updateTask(@Param('id') id: string) {
    return 'This action updates a task';
  }
}
