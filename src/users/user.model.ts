import {
  Column,
  DataType,
  PrimaryKey,
  Table,
  Model,
  DeletedAt,
} from 'sequelize-typescript';
import { Base } from './../Base.model';

@Table
export class User extends Base {
  @PrimaryKey
  @Column(DataType.UUID)
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isRegistered: boolean;
}
