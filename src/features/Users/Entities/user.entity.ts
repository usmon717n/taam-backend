import { BaseModel } from '../../../core/base-model/base-model';
import { Column, Entity } from 'typeorm';
import { LoginType, Role } from '../../../core/enums/enums';

@Entity('user')
export class User extends BaseModel {
  @Column({ type: 'enum', enum: Role, default: Role.USER })
  role!: Role;

  @Column({ type: 'varchar', length: 128 })
  fullName!: string;

  @Column({ type: 'varchar', length: 32, unique: true })
  phone!: string;

  @Column({ type: 'varchar', length: 128, unique: true })
  email!: string;

  @Column({ type: 'varchar', length: 128 })
  password!: string;

  @Column({ type: 'varchar', length: 64, unique: true })
  login!: string;

  @Column({ type: 'enum', enum: LoginType })
  loginType!: LoginType;

  @Column({ type: 'date', nullable: true })
  birthDate!: Date;

  @Column({ type: 'text', nullable: true })
  imgProfile!: string;

  @Column({ type: 'bool', default: false })
  isVerified!: boolean;

  @Column({ type: 'bool', default: false })
  isActive!: boolean;
}

// ctrl+alt+shift+p
