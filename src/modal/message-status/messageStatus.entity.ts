import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Conversations, User, Messages } from '@/modal';

@Entity()
export class MessageStatus {
  @PrimaryGeneratedColumn()
  message_status_id: number;

  @Column()
  message_id: number;

  @Column()
  user_id: number;

  @Column()
  status: number;

  @Column()
  updated_at: number;

  @ManyToOne(() => User, (users) => users.conversationUser)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Messages, (messages) => messages.messageStatus)
  @JoinColumn({ name: 'message_id' })
  messages: Messages;
}
