import { TaskService } from './task.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';

@Controller('tasks')
export class TaskController {
	constructor(private taskService: TaskService) { }

	@Get()
	getAllTasks(): Task[] {
		return this.taskService.getAllTasks();
	}

	@Post()
	createTask(
		@Body('title') title: string,
		@Body('description') description: string

	): Task {
		return this.taskService.createTask(title, description);
	}
}
