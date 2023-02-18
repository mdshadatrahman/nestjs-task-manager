import { TaskService } from './task.service';
import { Controller, Get } from '@nestjs/common';
import { Task } from './task.model';

@Controller('tasks')
export class TaskController {
	constructor(private taskService: TaskService) { }

	@Get()
	getAllTasks(): Task[] {
		return this.taskService.getAllTasks();
	}
}
