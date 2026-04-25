import { Controller, Get } from '@nestjs/common';   // Import decorator Controller & Get dari NestJS

@Controller('auth')                                 // Prefix route: /auth
export class AuthController {                       // Controller untuk fitur auth

  @Get()                                            // Endpoint GET /auth
  test() {
    return 'Auth jalan!';                           // Response sederhana untuk testing
  }

}