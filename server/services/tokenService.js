import jwt from 'jsonwebtoken';
import TokenSchema from '../models/Token.js';

class TokenService {
  async generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '15m'});
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});

    return {accessToken, refreshToken};
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await TokenSchema.findOne({user: userId});

    if (tokenData) {
      tokenData.refreshToken = refreshToken;

      return tokenData.save();
    }

    return await TokenSchema.create({user: userId, refreshToken});
  }
}

export default new TokenService;
