import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'src/strategies/jwt.strategy';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { AuthService } from 'src/services/auth/auth.service';

@Module({
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
    imports: [
        PassportModule.register({ defaultStrategy: 'jwt' }),
        JwtModule.registerAsync({
            imports: [],
            inject: [],
            useFactory: () => {
                return {
                    secret: process.env.JWT_SECRET,
                    signOptions: {
                        expiresIn: '24h'
                    }
                }
            }
        })
    ],
    exports: [JwtStrategy, PassportModule, JwtModule]
})
export class AuthModule { }