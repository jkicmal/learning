import { Injectable, NotImplementedException } from '@nestjs/common';
import { User } from '@entities';

@Injectable()
export class JwtService {
  public verify(token: string): boolean {
    throw new NotImplementedException();
  }

  public generate(user: User): string {
    throw new NotImplementedException();
  }
}
