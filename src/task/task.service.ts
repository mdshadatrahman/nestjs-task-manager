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

	getTaskById(id: string): Task {

		return this.tasks.find(task => task.id === id);

		//my code
		// for (var i = 0; i < this.tasks.length; i++) {
		// 	console.log('in loop');
		// 	if (this.tasks[i].id == id) {
		// 		console.log('found');
		// 		return this.tasks[i];
		// 	} else {
		// 		console.log('not found');
		// 	}
		// }
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
