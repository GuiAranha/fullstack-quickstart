import express, { NextFunction, Request, Response } from 'express';
import statusCodes from './statusCodes';
import 'express-async-errors';
import erroMiddleware from './src/middlewares/erro.middleware'
import loginRouter from './src/routes/login.router';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.get('/', (req: Request, res: Response) => {
    res.status(statusCodes.OK).send('Express + TypeScript')
});

app.use('/login', loginRouter);
/* app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const { name, message, details } = err as any;
    console.log(`name: ${name}`);
  
    switch (name) {
      case 'BadRequestError':
        res.status(400).json({ message });
        break;
      case 'ValidationError':
        res.status(400).json({ message: details[0].message });
        break;
      case 'NotFoundError':
        res.status(404).json({ message });
        break;
      case 'ConflictError':
        res.status(409).json({ message });
        break;
      default:
        console.error(err);
        res.sendStatus(500);
    }
  
    next();
  }); */

//app.use(erroMiddleware);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});