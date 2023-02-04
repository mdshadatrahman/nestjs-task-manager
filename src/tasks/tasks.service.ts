import { Task, TaskStatus } from './task.model';
import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid'

@Injectable()
export class TasksService {
	private tasks: Task[] = [];

	getAllTasks(): Task[] {
		return this.tasks;
	}

	createTaks(title: string, description: string): Task {
		const task: Task = {
			id: uuid.v1(),
			title,
			description,
			status: TaskStatus.OPEN,
		};

		this.tasks.push(task);
		return task;
	}
}
