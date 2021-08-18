import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Expense } from './expense.model';

@Module({
  imports: [SequelizeModule.forFeature([Expense])],
  providers: [ExpensesService],
  controllers: [ExpensesController],
})
export class ExpensesModule {}
