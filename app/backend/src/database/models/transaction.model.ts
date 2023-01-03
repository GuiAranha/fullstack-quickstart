import { Model, INTEGER, NUMBER } from 'sequelize';
import db from '.';

class Transaction extends Model {
  id!: number;
  debitedAccountId!: number;
  creditedAccountId!: number;
  value!: number;
  createdAt!: Date;
}

Transaction.init({
  id: {
    type: INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  debitedAccountId: {
    type: INTEGER,
    allowNull: false,
  },
  creditedAccountId: {
    type: INTEGER,
    allowNull: false,
  },
  value: {
    type: NUMBER,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  timestamps: true,
  createdAt: true,
  updatedAt: false,
  modelName: 'transaction',
});

export default Transaction;