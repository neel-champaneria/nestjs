import { Base } from '../Base.model';
import {
  Column,
  PrimaryKey,
  DataType,
  BelongsTo,
  Table,
} from 'sequelize-typescript';
import { User } from '../users/user.model';

@Table
export class Activity extends Base {
  @PrimaryKey
  @Column(DataType.UUID)
  id: number;

  @Column(DataType.UUID)
  activityId: number;

  @Column({
    type: DataType.ENUM({
      values: ['Friend', 'Group', 'UserGroup', 'Expense', 'Repayment'],
    }),
  })
  tableName: string;

  @Column({
    type: DataType.ENUM({
      values: ['Add', 'Remove', 'Update'],
    }),
  })
  action: string;

  @BelongsTo(() => User, { foreignKey: 'userId', onDelete: 'CASCADE' })
  user: User;
}
