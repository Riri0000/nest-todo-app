import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private repo: Repository<Task>) {}

  // create entity instance
  create(name: string, note: string, status: string) {
    const task = this.repo.create({ name, note, status });

    // save to DB
    return this.repo.save(task);
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOne(id);
  }

  findAll() {
    return this.repo.find();
  }

  async update(id: number, attrs: Partial<Task>): Promise<Task> {
    const task = await this.findOne(id);
    if (!task) {
      throw new NotFoundException('Task is not found');
    }
    Object.assign(task, attrs);
    return this.repo.save(task);
  }

  async delete(id: number): Promise<Task> {
    const task = await this.findOne(id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return this.repo.remove(task);
  }
}
