import { Injectable } from '@nestjs/common';
import { RegisterCredentialsDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  // constructor(@InjectModel(User.modelName) private readonly _userModel: ModelType<User>) {}

  async signUp(registerDto: RegisterCredentialsDto) {
    return 'ecec';
  }
}
