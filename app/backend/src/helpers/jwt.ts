import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import IUser from '../database/interfaces/IUser';

dotenv.config();

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default class JWT {
  static generateToken(user: IUser): string {
    const config: jwt.SignOptions = {
      expiresIn: '24h',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data: user }, secret, config);
    return token;
  }

  static validateToken(token: string) {
    try {
      const verified = jwt.verify(token, secret);
      return verified;
    } catch (err) {

    }
  }
}