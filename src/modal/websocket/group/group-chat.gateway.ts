import { ConversationsService } from '@/modal/conversations/conversations.service';
import { Server, Socket } from 'socket.io';
import { ConversationUsersService } from '@/modal/conversation-users/conversationUsers.service';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, ConnectedSocket } from '@nestjs/websockets';
import { userSockets } from '@/store/user-socket.store';
import { MessagesService } from '@/modal/messages/messages.service';

@WebSocketGateway({ cors: true, namespace: '/group-chat' })
export class GroupChatGateway {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly conversationService: ConversationsService,
    private readonly conversationUserService: ConversationUsersService,
    private readonly messagesService: MessagesService,
  ) {}

  async handleConnection(@ConnectedSocket() client: Socket) {
    const user = (client as any).user; // middleware gắn JWT payload
    if (user?.user_id) {
      const sockets = userSockets.get(user.user_id) || [];
      sockets.push(client.id);
      userSockets.set(user.user_id, sockets);
      console.log(`✅ User ${user.user_id} connected with socket ${client.id}`);
    }
  }

  async handleDisconnect(@ConnectedSocket() client: Socket) {
    const user = (client as any).user;
    if (user?.user_id) {
      const sockets = userSockets.get(user.user_id) || [];
      const updated = sockets.filter((id) => id !== client.id);

      if (updated.length > 0) {
        userSockets.set(user.user_id, updated);
      } else {
        userSockets.delete(user.user_id);
      }

      console.log(`❌ User ${user.user_id} disconnected from socket ${client.id}`);
    }
  }

  @SubscribeMessage('group:create')
  async handleCreateGroup(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    //tạo cuộc trò chuyện 1-1
    const user = (client as any).user; // đã có từ middleware
    console.log('User gửi yêu cầu:', user, data);
    console.log(userSockets);
    console.log(data);
    // await this.conversationService.createConversation(data);
    // // taạo ngươ trong cuoojc trò chuyện
    // await this.conversationUserService.createConversationUser(data);

    this.server.emit('group:new_message', {
      hehe: 'haha',
    });
  }

  @SubscribeMessage('message:send')
  async handleMessageSend(@ConnectedSocket() client: Socket, @MessageBody() data: any) {
    // gửi tin nhắn trong cuộc trò chuyện 1-1
    const user = (client as any).user;

    const createMs = {
      ...data,
      sender_id: user.user_id,
    };
    const res = await this.messagesService.createMessage(createMs);
    // tạo tin nhắn thành công

    // trả thông báo về cho những user có trong converstion đấy đang online
    const listUserInConversation = await this.conversationUserService.getUsersInConversation(data.conversation_id);
    for (const u of listUserInConversation) {
      const sockets = userSockets.get(u.user_id);
      if (sockets && sockets.length > 0) {
        for (const s of sockets) {
          this.server.to(s).emit('message:new', {
            message: res,
            conversation_id: data.conversation_id,
            sender: {
              user_id: user.user_id,
              username: user.username,
            },
          });
          const conversations = await this.conversationService.getConversationWithUserInfo(u.user_id);
          this.server.to(s).emit('conversation:new', conversations);
        }
      }
    }
  }
}
