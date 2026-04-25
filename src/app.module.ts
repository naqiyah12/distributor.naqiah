import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],               // Import module Auth agar aktif
})
export class AppModule {}              // Root module aplikasi