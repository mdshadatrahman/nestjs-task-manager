import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { TaskService } from './task.service';
import { Body, Controller, Get, Param, Post, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enum';

@Controller('tasks')
export class TaskController {
	constructor(private readonly taskService: TaskService) { }

	@Get()
	getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Promise<Task[]> {
		return this.taskService.getTasks(filterDto);
	}

	@Get(':id')
	getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
		return this.taskService.getTaskById(id);
	}

	@Post()
	@UsePipes(ValidationPipe)
	createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
		return this.taskService.createTask(createTaskDto);
	}

	@Delete(':id')
	deleteTask(@Param('id', ParseIntPipe) id: number): Promise<void> {
		return this.taskService.deleteTaskById(id);
	}

	@Patch(':id/status')
	updateTask(
		@Param('id', ParseIntPipe) id: number,
		@Body('status', TaskStatusValidationPipe) status: TaskStatus
	): Promise<Task> {
		return this.taskService.updateTaskStatus(id, status);
	}

}
