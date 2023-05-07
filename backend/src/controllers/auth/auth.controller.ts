import { Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateAuthDto } from '../../dtos/auth'
import { AuthService } from '../../services/auth/auth.service'

@Controller('auth')
@ApiTags('Authenticates')
export class AuthController {

    constructor(
        private readonly jwtService: JwtService,
        private readonly authService: AuthService
    ) { }

    /**
     * Authenticates the visitor and returns the token
     * @param createUser 
     * @returns 
     */
    @Post()
    @ApiOperation({ summary: "authentic the user" })
    async auth(@Body() createAuthDto: CreateAuthDto) {
        const device: any = await this.authService.create(createAuthDto)
        return { token: this.jwtService.sign(device) }
    }

}