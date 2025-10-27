import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User, Groups } from '@/modal';

@Entity()
export class GroupMembers {
  @PrimaryGeneratedColumn()
  group_member_id: number;

  @Column()
  group_id: number;

  @Column()
  user_id: number;

  @Column()
  role: string;

  @Column()
  joined_at: string;

  // 1 group cos nhieeuf member

  @ManyToOne(() => Groups, (groups) => groups.members)
  @JoinColumn({ name: 'group_id' })
  groups: Groups;

  // 1 member co the o nhieu group

  @ManyToOne(() => User, (users) => users.groupMembers)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
