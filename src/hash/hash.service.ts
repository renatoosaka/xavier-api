import { Injectable } from '@nestjs/common';
import { compareSync, hashSync } from 'bcrypt';

@Injectable()
export class HashService {
  generate(str: string): string {
    return hashSync(str, 10);
  }

  compare(str: string, hash: string): boolean {
    return compareSync(str, hash);
  }
}
