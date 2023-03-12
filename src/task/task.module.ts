import { Task } from './task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([TaskModule, Task]),
  ],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule { }
