"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const users_repository_1 = require("../users/users.repository");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(userRepository, jwtService, configService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async generateTokens(userId) {
        const accessToken = this.jwtService.sign({ userId }, {
            secret: this.configService.get('JWT_ACCESS_SECRET'),
            expiresIn: '24h',
        });
        const refreshToken = this.jwtService.sign({ userId }, {
            secret: this.configService.get('JWT_REFRESH_SECRET'),
            expiresIn: '7d',
        });
        const hashedRefreshToken = await this.hashToken(refreshToken);
        await this.userRepository.updateUser(userId, hashedRefreshToken);
        return { accessToken, refreshToken };
    }
    async hashToken(token) {
        const bcrypt = await Promise.resolve().then(() => require('bcrypt'));
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(token, salt);
    }
    async validateToken(token, secret) {
        try {
            return this.jwtService.verify(token, { secret });
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
    }
    async refreshTokens(refreshToken) {
        const payload = await this.validateToken(refreshToken, this.configService.get('JWT_REFRESH_SECRET'));
        if (!payload) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        const { userId } = payload;
        const user = await this.userRepository.findById(userId);
        if (!user || !user.refreshToken) {
            throw new common_1.UnauthorizedException('User not found or no refresh token stored');
        }
        const bcrypt = await Promise.resolve().then(() => require('bcrypt'));
        const isValidToken = await bcrypt.compare(refreshToken, user.refreshToken);
        if (!isValidToken) {
            throw new common_1.UnauthorizedException('Invalid refresh token');
        }
        const tokens = await this.generateTokens(userId);
        const hashedRefreshToken = await this.hashToken(tokens.refreshToken);
        await this.userRepository.updateUser(userId, hashedRefreshToken);
        return tokens;
    }
    async validateUser(login, password) {
        const user = await this.userRepository.findByLogin(login);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return { userId: user._id.toString() };
    }
    async login(login, password) {
        const { userId } = await this.validateUser(login, password);
        const { accessToken, refreshToken } = await this.generateTokens(userId);
        return { accessToken, refreshToken };
    }
    async logout(userId) {
        await this.userRepository.updateUser(userId, null);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map