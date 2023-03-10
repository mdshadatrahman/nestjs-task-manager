import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
	type: 'postgres',
	host: '172.22.0.2',
	port: 5432,
	username: 'root',
	password: 'root',
	database: 'taskmanagement',
	// entities: [__dirname + '/../**/*.entity.{js,ts}'],
	autoLoadEntities: true,
	synchronize: true,
}