import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '@/modal/user/user.entity';
import { Conversations } from '@/modal';
import { MessageStatus } from '@/modal/message-status/messageStatus.entity';

@Entity()
export class Messages {
  @PrimaryGeneratedColumn()
  message_id: number;

  @Column()
  conversation_id: number;

  @Column()
  sender_id: number;

  @Column({ type: 'varchar', length: 5000 })
  message_text: string;

  @Column({ nullable: true })
  message_type: string;

  @Column({ nullable: true })
  created_at: string;

  @Column({ nullable: true })
  updated_at: string;

  @ManyToOne(() => Conversations, (conversations) => conversations.conversationUsers)
  @JoinColumn({ name: 'conversation_id' })
  conversations: Conversations;

  @ManyToOne(() => User, (user) => user.messages)
  @JoinColumn({ name: 'sender_id' })
  users: User;

  @OneToMany(() => MessageStatus, (messStatus) => messStatus.messages)
  messageStatus: MessageStatus[];
}
