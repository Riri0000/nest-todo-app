import {
  Get,
  Post,
  Patch,
  Param,
  Controller,
  Delete,
  ParseIntPipe,
  Body,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dtos/task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { Task } from './tasks.entity';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.findOne(id);
  }

  @Post()
  create(@Body() body: TaskDto): Promise<Task> {
    return this.tasksService.create(body.name, body.note, body.status);
  }

  @Delete('/:id')
  removeTask(@Param('id', ParseIntPipe) id: number) {
    return this.tasksService.delete(id);
  }

  @Patch('/:id')
  updateTask(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateTaskDto,
  ): Promise<Task> {
    return this.tasksService.update(id, body);
  }
}
