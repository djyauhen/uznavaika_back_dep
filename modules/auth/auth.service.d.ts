import { JwtService } from '@nestjs/jwt';
import { UsersRepository } from '../users/users.repository';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private readonly configService;
    constructor(userRepository: UsersRepository, jwtService: JwtService, configService: ConfigService);
    generateTokens(userId: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    private hashToken;
    validateToken(token: string, secret: string): Promise<any>;
    refreshTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    validateUser(login: string, password: string): Promise<{
        userId: string;
    }>;
    login(login: string, password: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    logout(userId: string): Promise<void>;
}
