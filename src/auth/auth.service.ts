import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Repository } from 'typeorm';
import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User) private userRepository: Repository<User>,
	) { };

	async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
		const { username, password } = authCredentialsDto;

		const user = new User();
		user.username = username;
		user.password = password;
		try {
			await user.save();
		} catch (error) {
			if (error.code === '23505') {
				throw new ConflictException('username already exists')
			} else {
				throw new InternalServerErrorException();
			}
		}
	}
}
