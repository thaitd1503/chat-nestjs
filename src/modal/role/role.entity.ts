import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '@/modal/user/user.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  role_id: number;

  @Column()
  role_name: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
