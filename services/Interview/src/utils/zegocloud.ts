// utils/zegocloud.ts
import * as crypto from 'crypto';

const appId = process.env.ZEGOCLOUD_APP_ID;
const serverSecret = process.env.ZEGOCLOUD_SERVER_SECRET || '';

export const generateRoomUrl = async (roomId: string, userId: string, userName: string) => {
  const expiredTime = Math.floor(Date.now() / 1000) + 3600;
  const nonce = Math.floor(Math.random() * 1000000);
  const payload = {
    app_id: appId,
    room_id: roomId,
    user_id: userId,
    privilege: {
      1: 1, // Login privilege
      2: 1  // Publish privilege
    },
    expire: expiredTime,
    nonce
  };

  const generateRoomId = (): string => {
    const getRandomLetters = (): string => {
      const letters = 'abcdefghijklmnopqrstuvwxyz';
      let result = '';
      for (let i = 0; i < 3; i++) {
        result += letters.charAt(Math.floor(Math.random() * letters.length));
      }
      return result;
    };
    return `${getRandomLetters()}-${getRandomLetters()}-${getRandomLetters()}`;
  };

  const payloadString = JSON.stringify(payload);
  const token = crypto.createHmac('sha256', serverSecret).update(payloadString).digest('hex');
  const roomIdReal = generateRoomId()

  const roomUrl = `http://localhost:5173/lobby/join?roomID=${roomIdReal}&token=${token}&Id=${roomId}`;
  return roomUrl;
};
