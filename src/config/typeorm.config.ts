import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Task } from "src/task/task.entity";

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: '172.19.0.2',
	port: 5432,
	username: 'root',
	password: 'root',
	database: 'taskmanagement',
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	autoLoadEntities: true,
	// entities: [Task],
	synchronize: true,
}