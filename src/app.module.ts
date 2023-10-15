import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { ManageModule } from './manage/manage.module';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(dataSourceOptions), OrderModule, CustomerModule, ManageModule],
  controllers: [AppController],
})
export class AppModule {}
