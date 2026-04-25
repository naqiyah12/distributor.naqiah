import { Controller, Get, Post, Body } from '@nestjs/common';   // Import decorator & tools dari NestJS
import { AuthService } from './services/auth.service';           // Import AuthService

@Controller('auth')                                             // Prefix route: /auth
export class AuthController {                                   // Controller untuk autentikasi

  constructor(private readonly authService: AuthService) {}     // Inject AuthService ke controller

  @Get()                                                        // Endpoint GET /auth
  test() {
    return 'Auth jalan!';                                       // Response sederhana untuk test
  }

  @Post('login')                                                // Endpoint POST /auth/login
  login(@Body() body: any) {                                    // Ambil data dari body request
    return this.authService.login(body);                        // Panggil method login di service
  }
}