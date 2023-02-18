import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class PasswordsService {
  public verify(email: string, password: string): boolean {
    throw new NotImplementedException();
  }
}
