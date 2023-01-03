import * as joi from 'joi';
import JWT from '../helpers/jwt';
import Users from '../database/models/user.model';
import HandleError from '../helpers/handleError';

export default class LoginService {
  constructor(private model = Users) {
    this.model = model;
  }

  static validateLogin(email: string, password: string) {
    const schema = joi.object({
      email: joi.string().required().email(),
      password: joi.string().required().min(6),
    }).validate({ email, password });

    if (schema.error) {
      console.log(schema.error.message);
      throw new HandleError(400, 'All fields must be filled');
    }
  }

  public async login(email: string, password: string): Promise<string | void> {
    LoginService.validateLogin(email, password);
    // console.log(LoginService.validateLogin(email, password));
    const data = await this.model.findOne({ where: { email } });
    if (!data) throw new HandleError(401, 'Incorrect email or password');
    const token = JWT.generateToken(data);
    return token;
  }
}