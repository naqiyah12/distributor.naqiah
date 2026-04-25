import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  controllers: [AuthController],      // Daftar controller
  providers: [AuthService],           // Daftar service (logic)
})
export class AuthModule {}            // Module untuk fitur auth