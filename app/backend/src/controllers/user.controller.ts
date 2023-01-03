import { NextFunction, Response, Request } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  constructor(private userService = new UserService()) {
  }

  static async createUser(req: Request, res: Response, next: NextFunction): Promise<Response> {
    const user = req.body;
    const data = await UserService.createUser(user);
    return res.status(201).json({ token: data });
  }
}
