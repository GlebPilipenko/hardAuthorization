import {v1} from 'uuid';
import bcrypt from 'bcrypt';
import {UserDTO} from '../dtos/UserDTO.js';
import UserSchema from '../models/User.js';
import MailService from '../services/mailService.js';
import TokenService from '../services/tokenService.js';

class UserService {
  async registration(email, password) {
    const candidate = await UserSchema.findOne({email});

    if (candidate) {
      throw new Error('User already exists');
    }

    const activationLink = v1();
    const hashPassword = await bcrypt.hash(password, 7);
    const user = await UserSchema.create({
      email,
      password: hashPassword,
      activationLink,
    });

    await MailService.sendActivationMail(email, activationLink);

    // Read about DTO
    // Read about DTO
    // Read about DTO
    const userDTO = new UserDTO(user);
    const {accessToken, refreshToken} = await TokenService.generateTokens({...userDTO});

    await TokenService.saveToken(userDTO.id, refreshToken);

    return {
      accessToken,
      refreshToken,
      user: userDTO,
    };
  }
}

export default new UserService;
