import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Role } from '@/modal/role/role.entity';
import { GroupMembers, Messages } from '@/modal';
import { ConversationUsers } from '@/modal/conversation-users/conversationUsers.entity';
import { MessageStatus } from '@/modal/message-status/messageStatus.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column()
  role_id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @Column({ nullable: true })
  avatar_url?: string;

  @Column({ nullable: true })
  otp_secret?: string;

  @Column({ nullable: true })
  time_otp?: string;

  @Column({ nullable: true })
  status?: string;

  @Column({ nullable: true })
  created_at?: string;

  @Column({ nullable: true })
  updated_at?: string;

  @ManyToOne(() => Role, (role) => role.users)
  @JoinColumn({ name: 'role_id' })
  role: Role;

  @OneToMany(() => GroupMembers, (groupMembers) => groupMembers.user)
  groupMembers: GroupMembers[];

  @OneToMany(() => ConversationUsers, (conversationUser) => conversationUser.user)
  conversationUser: ConversationUsers[];

  @OneToMany(() => MessageStatus, (messStatus) => messStatus.user)
  messageStatus: MessageStatus[];

  @OneToMany(() => Messages, (mess) => mess.users)
  messages: Messages[];
}
