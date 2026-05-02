import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { ProductsModule } from './products/products.module';
import { StockModule } from './stock/stock.module';
import { ScheduleModule } from './schedule/schedule.module';
import { OrdersModule } from './orders/orders.module';
import { PaymentsModule } from './payments/payments.module';
import { TransactionsModule } from './transactions/transactions.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [AuthModule, UsersModule, SuppliersModule, ProductsModule, StockModule, ScheduleModule, OrdersModule, PaymentsModule, TransactionsModule, ReportsModule],               // Import module Auth agar aktif
})
export class AppModule {}              // Root module aplikasi