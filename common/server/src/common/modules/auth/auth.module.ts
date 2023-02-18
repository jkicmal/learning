import { Global, Module } from '@nestjs/common';
import { JwtService, PasswordsService } from './services';

@Global()
@Module({
  imports: [],
  providers: [JwtService, PasswordsService],
  exports: [],
})
export class AuthModule {}
