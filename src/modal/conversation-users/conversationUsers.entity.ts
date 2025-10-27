import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Conversations, User } from '@/modal';

@Entity()
export class ConversationUsers {
  @PrimaryGeneratedColumn()
  conversation_user_id: number;

  @Column()
  conversation_id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => User, (users) => users.conversationUser)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Conversations, (conversations) => conversations.conversationUsers)
  @JoinColumn({ name: 'conversation_id' })
  conversations: Conversations;
}
