import express from 'express';
import AppController from './controller/AppController';
import cors from 'cors';
import bodyParser from 'body-parser';

const App = express();
/** Init */
App.use(express.json());
App.use(express.text());
App.use(bodyParser.json());
App.use(cors());

App.use('/api', AppController);

export default App;
