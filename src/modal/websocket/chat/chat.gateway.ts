// import { MessageBody, SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
//
// @WebSocketGateway({ cors: true })
// export class ChatGateway {
//   @SubscribeMessage('chat:sendMessage')
//   handleSendMessage(@MessageBody() data: any) {
//     // xử lý gửi tin nhắn
//   }
//
//   @SubscribeMessage('chat:typing')
//   handleTyping(@MessageBody() data: any) {
//     // xử lý user đang nhập
//   }
// }
