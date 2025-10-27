import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { GroupMembers } from '@/modal';
import { Conversations } from '@/modal/conversations/conversations.entity';

@Entity()
export class Groups {
  @PrimaryGeneratedColumn()
  group_id: number;

  @Column()
  group_name: string;

  @Column()
  description: string;

  @Column()
  is_private: boolean;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @OneToMany(() => GroupMembers, (member) => member.groups)
  members: GroupMembers[];

  @OneToMany(() => Conversations, (groups) => groups.groups)
  conversations: Conversations[];
}
