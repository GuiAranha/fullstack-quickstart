import Users from '../database/models/user.model';
import HandleError from '../helpers/handleError';
import { encryptPassword, checkPassword } from '../helpers/hashPassword';
import JWT from '../helpers/jwt';
import * as Joi from 'joi';

export default class UserService {
  constructor(private model = Users) {
    this.model = model;
  }

  static createUser = async (user: any) => {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
    });

    const { error } = schema.validate(user);
    if (error) {
      throw new HandleError(404, 'Missing fields');
    }

    const found = await Users.findOne({ where: { email: user.email } });
    if (found) {
      throw new HandleError(409, 'Conflict');
    }

    const hash = encryptPassword(user.password);
    await Users.create({ ...user, password: hash });
    const data = JWT.generateToken(user);
    return data;
  }

  /* public async login(email: string, password: string): Promise<string | void> {
    UserService.validateLogin(email, password);
    // console.log(LoginService.validateLogin(email, password));
    const data = await this.model.findOne({ where: { email } });
    if (!data) throw new HandleError(401, 'Incorrect email or password');
    const token = JWT.generateToken(data);
    return token;
  } */
}