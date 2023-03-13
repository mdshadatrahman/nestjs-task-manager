import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { ConflictException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
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
		user.salt = await bcrypt.genSalt();
		user.password = await this.hashPassword(password, user.salt);

		console.log(user.password);


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

	async validateUserPassword(authCredentialsDto: AuthCredentialsDto): Promise<String> {
		const { username, password } = authCredentialsDto;
		const user = await User.findOne({ where: { username: username } });
		if (user && await user.validatePassword(password)) {
			return user.username;
		} else {
			throw new UnauthorizedException('Invalid credentials');
		}
	}

	private async hashPassword(password: string, salt: string): Promise<string> {
		return bcrypt.hash(password, salt);
	}
}
