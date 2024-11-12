import { Role } from '../../../../../constants/role.constant';
import { UserEntity } from '../../entities/user.entity';

export class UserInfoDto {
  id: string;
  name: string;
  username: string;
  password: string;
  role: Role;

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.name = userEntity.name;
    this.username = userEntity.username;
    this.password = userEntity.password;
    this.role = userEntity.role;
  }
}
