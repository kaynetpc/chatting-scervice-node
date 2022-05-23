import express from 'express'
import AppController from './controller/AppController';

const App = express();
/**Init */
App.use(express.json());
App.use(express.text());

App.use('/', AppController)

export default App;