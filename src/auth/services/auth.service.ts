// src/auth/auth.service.ts                           // Lokasi file service auth

import { Injectable } from '@nestjs/common';          // Import decorator Injectable

@Injectable()                                         // Menandakan class bisa di-inject
export class AuthService {                            // Service untuk autentikasi

  login(data: any) {                                  // Method untuk proses login
    const username = data.username;                   // Ambil username dari request
    const password = data.password;                   // Ambil password dari request

    if (username === 'admin' && password === '123456') { // Validasi sederhana (hardcoded)
      return {
        status: true,                                 // Status login berhasil
        message: 'Login berhasil',                    // Pesan sukses
        token: 'dummy-jwt-token-admin',               // Token dummy (belum JWT asli)
        user: {
          username: 'admin',                          // Username user
          role: 'admin',                              // Role user
        },
      };
    }

    return {
      status: false,                                  // Status login gagal
      message: 'Username atau password salah',        // Pesan error
    };
  }
}