import express from 'express';
import AppController from './controller/AppController';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import {AppConfigs} from './config/app';

const App = express();
App.use(cookieParser(AppConfigs.COOKIE_PARSER_KEY));
/** Init */
App.use(express.json());
App.use(express.text());
App.use(bodyParser.json());
App.use(cors());

App.use('/api', AppController);

export default App;
