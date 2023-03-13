import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
	constructor(
		private authService: AuthService,
	) { }

	@Post('signup')
	singUp(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<void> {
		return this.authService.signUp(authCredentialsDto);
	}

	@Post('login')
	login(@Body(ValidationPipe) authCredentialsDto: AuthCredentialsDto): Promise<String>{
		return this.authService.validateUserPassword(authCredentialsDto);
	}
}
