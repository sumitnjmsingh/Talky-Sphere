// import { NEXT_PUBLIC_PUSHER_APP_KEY, PUSHER_APP_ID, PUSHER_SECRET } from '@/constants';
import PusherServer from 'pusher';
import PusherClient from 'pusher-js';

// create pusher server instance
export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: 'ap2',
  useTLS: true,
});

// create pusher client instance
export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    channelAuthorization: {
      endpoint: '/api/pusher/auth',
      transport: 'ajax',
    },
    cluster: 'ap2',
  }
);
