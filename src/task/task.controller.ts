import { CreateTaskDto } from './dto/create-tasks.dto';
import { TaskService } from './task.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Task } from './task.model';

@Controller('tasks')
export class TaskController {
	constructor(private taskService: TaskService) { }

	@Get()
	getAllTasks(): Task[] {
		return this.taskService.getAllTasks();
	}

	@Get('/:id')
	getTaskById(@Param('id') id: string): Task {
		return this.taskService.getTaskById(id);
	}

	@Post()
	createTask(@Body() createTaskDto: CreateTaskDto): Task {
		return this.taskService.createTask(createTaskDto);
	}

}
