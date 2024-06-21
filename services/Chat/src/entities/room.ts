// Define the message data interface
export interface MessageData {
  message: string;
  time: Date;
  status: string;
  from: {
    name: string;
    id: string;
    role: string;
  };
  to: {
    name: string;
    id: string;
    role: string;
  };
}

// Define the room data interface
export interface RoomData {
  _id?: string;
  user1Id: string;
  user2Id: string;
  user1_name: string;
  user2_name: string;
  last_online?: Date;
  chat?: MessageData[];
}

// Define the Room class
export class Room {
  _id?: string;
  user1Id: string;
  user2Id: string;
  user1_name: string;
  user2_name: string;
  last_online?: Date;
  chat?: MessageData[];

  constructor({
    _id,
    user1Id,
    user2Id,
    user1_name,
    user2_name,
    last_online,
    chat,
  }: RoomData) {
    this._id = _id;
    this.user1Id = user1Id;
    this.user2Id = user2Id;
    this.user1_name = user1_name;
    this.user2_name = user2_name;
    this.last_online = last_online;
    this.chat = chat;
  }
}
