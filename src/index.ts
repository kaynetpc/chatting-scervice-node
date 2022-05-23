import http from 'http';
import App from './app';

const port = 3000;

http.createServer(App).listen(port, async () => {
    console.log('App listing on port '+port)
})