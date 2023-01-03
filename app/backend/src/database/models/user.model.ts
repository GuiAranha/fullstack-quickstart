import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Account from './account.model';

class Users extends Model{
  id!: number;
  username!: string;
  password!: string;
  accountId!: number;
}

Users.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  accountId: {
    type: INTEGER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: false,
  modelName: 'user',
});


Users.belongsTo(Account, { foreignKey: 'accountId', as: 'idAccount' });
Account.hasOne(Users, { foreignKey: 'accountId', as: 'idAccount'});

export default Users;