import {Server} from 'socket.io';
import http from 'http';
import App from './app';
import {AppConfigs} from './config/app';
import {connectDB} from './config/db';
import {ClientToServerEvents,
  ServerToClientEvents, InterServerEvents, SocketData} from './socket.io.types';

const port = AppConfigs.SERVER_PORT;


export const appServer = http.createServer(App);
export const io =
   new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>();

appServer.listen(port, async () => {
  console.log('App listing on port '+port);
  /** Connection to DB */
  try {
    await connectDB();
    console.log('Connected to DB');
  } catch (error) {
    console.log(`
        DB CONNECTION ERROR:::: 
        ${error}
        `);
  }
});


