import { TaskStatusValidationPipe } from './pipes/task-status-validation.pipe';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-tasks.dto';
import { TaskService } from './task.service';
import { Body, Controller, Get, Param, Post, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Task } from './task.entity';

@Controller('tasks')
export class TaskController {
	constructor(private readonly taskService: TaskService) { }

	// @Get()
	// getTasks(@Query(ValidationPipe) filterDto: GetTasksFilterDto): Task[] {
	// 	if (Object.keys(filterDto).length) {
	// 		return this.taskService.getTaskWithFilter(filterDto);
	// 	} else {
	// 		return this.taskService.getAllTasks();
	// 	}
	// }

	@Get(':id')
	getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
		return this.taskService.getTaskById(id);
	}

	// @Post()
	// @UsePipes(ValidationPipe)
	// createTask(@Body() createTaskDto: CreateTaskDto): Task {
	// 	return this.taskService.createTask(createTaskDto);
	// }

	// @Delete(':id')
	// deleteTask(@Param('id') id: string): void {
	// 	return this.taskService.deleteTaskById(id);
	// }

	// @Patch(':id/status')
	// updateTask(
	// 	@Param('id') id: string,
	// 	@Body('status', TaskStatusValidationPipe) status: TaskStatus
	// ) {
	// 	return this.taskService.updateTaskStatus(id, status);
	// }

}
