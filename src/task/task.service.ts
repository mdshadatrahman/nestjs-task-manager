import { CreateTaskDto } from './dto/create-tasks.dto';
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import * as uuid from 'uuid/v1';

@Injectable()
export class TaskService {
	private tasks: Task[] = [];

	getAllTasks(): Task[] {
		return this.tasks;
	}

	createTask(createTaskDto: CreateTaskDto): Task {
		const { title, description } = createTaskDto;
		const task: Task = {
			id: uuid(),
			title,
			description,
			status: TaskStatus.OPEN
		}

		this.tasks.push(task);
		return task;
	}
}
