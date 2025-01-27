import { Response } from "express";
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginUserDto, res: Response): Promise<{
        accessToken: string;
    }>;
    refresh(req: any, res: Response): Promise<{
        accessToken: string;
    }>;
    logout(req: any): Promise<{
        statusCode: number;
        message: string;
    }>;
}
