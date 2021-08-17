import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  UpdatedAt,
  DataType,
} from 'sequelize-typescript';

export class Base extends Model {
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  idDeleted: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}
