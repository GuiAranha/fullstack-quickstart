import HandleError from "./handleError";
import passwordHash from 'password-hash';

export const encryptPassword = (password: string) => {
  const hashedPassword = passwordHash.generate(password);
  return hashedPassword;
};

export const checkPassword = (password: string, hashedPassword: string) => {
  const hash = passwordHash.verify(password, hashedPassword);
  if (hash === false) {
    throw new HandleError(401, 'Incorrect password');
  }
};
