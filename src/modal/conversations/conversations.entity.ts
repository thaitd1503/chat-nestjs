import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Groups, Messages } from '@/modal';
import { ConversationUsers } from '@/modal/conversation-users/conversationUsers.entity';

@Entity()
export class Conversations {
  @PrimaryGeneratedColumn()
  conversation_id: number;

  @Column()
  is_group: boolean;

  @Column({ nullable: true })
  group_id: number;

  @Column({ nullable: true })
  created_at: string;

  @Column({ nullable: true })
  updated_at: string;

  @ManyToOne(() => Groups, (groups) => groups.members)
  @JoinColumn({ name: 'group_id' })
  groups: Groups;

  @OneToMany(() => ConversationUsers, (conversationUsers) => conversationUsers.conversations)
  conversationUsers: ConversationUsers[];

  @OneToMany(() => Messages, (messages) => messages.conversations)
  messages: Messages[];
}
