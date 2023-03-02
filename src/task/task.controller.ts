import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { TaskService } from './task.service';
import { Body, Controller, Get, Param, Post, Delete, Patch, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { filter } from 'rxjs';

@Controller('tasks')
export class TaskController {
	constructor(private taskService: TaskService) { }

	@Get()
	getTasks(@Query() filterDto: GetTasksFilterDto): Task[] {
		if (Object.keys(filterDto).length) {
			return this.taskService.getTaskWithFilter(filterDto);
		} else {
			return this.taskService.getAllTasks();
		}
	}

	@Get(':id')
	getTaskById(@Param('id') id: string): Task {
		return this.taskService.getTaskById(id);
	}

	@Post()
	@UsePipes(ValidationPipe)
	createTask(@Body() createTaskDto: CreateTaskDto): Task {
		return this.taskService.createTask(createTaskDto);
	}

	@Delete(':id')
	deleteTask(@Param('id') id: string): void {
		return this.taskService.deleteTaskById(id);
	}

	@Patch(':id/status')
	updateTask(
		@Param('id') id: string,
		@Body('status') status: TaskStatus
	) {
		return this.taskService.updateTaskStatus(id, status);
	}

}
