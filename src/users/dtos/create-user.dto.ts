export class CreateUserDTO {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'store';
}
