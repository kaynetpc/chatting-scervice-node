import express, {Request, Response} from 'express';
import MainService from '../service/Service';
import {ResponseService} from '../response/ResponseService';
import {IUserData} from '../modules/user/interface/user.req.types';
import ResponseError from '../response/ResponseError';
import {ILoginRequest} from '../interface/login.req.types';
import {IMessageRequest} from '../interface/message.req.types';
import {IConversationData} from '../modules/conversation/interface/conversations.types';
import {IMassageAction} from '../modules/message/interface/message.types';

const AppController = express.Router();

/** 1 Demonstrate a request/response to authenticate with your API:  */
// Login Api
AppController.post('/login', async (req: Request, res: Response) => {
  try {
    const request: ILoginRequest = req.body;
    const response = await MainService.auth(request);
    return ResponseService(res, response, 200);
  } catch (error) {
    return ResponseService(res, error, 500);
  }
});

// Onboarding Api
AppController.post('/register', async (req: Request, res: Response) => {
  try {
    const request: IUserData = req.body;
    const response = await MainService.authRegister(request);
    return ResponseService(res, response, 200);
  } catch (error) {
    return ResponseService(res, error, 500);
  }
});

/** 2. Demonstrate a request/response to retrieve all messages (after successful authentication): */
// Retrieve all messages
AppController.get('/message/list', async (req: Request, res: Response) => {
  try {
    const conversationId: any = req.query.conversationId;
    console.log(conversationId);
    const response = await MainService.messages(conversationId);
    return ResponseService(res, response, 200);
  } catch (error) {
    return ResponseService(res, error, ResponseError.INTERNAL_SERVER_ERROR);
  }
});

/** 3. Demonstrate a request/response to retrieve the user with ID #1: */
AppController.get('/user/get', async (req: Request, res: Response) => {
  try {
    const userId: any = req.query.id;
    const response = await MainService.getUserById(userId);
    return ResponseService(res, response, 200);
  } catch (error) {
    return ResponseService(res, error, ResponseError.INTERNAL_SERVER_ERROR);
  }
});

/** 4. Demonstrate a request/response to create a new message "hello" from user ID #1 to user ID
 #2: */
AppController.post('/message/send', async (req: Request, res: Response) => {
  // send new message
  try {
    const data: IMessageRequest = req.body;
    const response = await MainService.sendMessage(data);
    return ResponseService(res, response, 200);
  } catch (error) {
    return ResponseService(res, error, ResponseError.INTERNAL_SERVER_ERROR);
  }
});

/** 5. Demonstrate one or more request/responses to mark all messages sent today by user ID #1
  as read */
AppController.post('/message/mark/all_read', async (req: Request, res: Response) => {
  try {
    const msgPayload: IMassageAction = req.body;
    const response = await MainService.updateMessageReadStatus(msgPayload);
    return ResponseService(res, response, 200);
  } catch (error) {
    return ResponseService(res, error, ResponseError.INTERNAL_SERVER_ERROR);
  }
});


AppController.post('/conversation', async (req: Request, res: Response) => {
  try {
    const data: IConversationData = req.body;
    const response = await MainService.conversation(data);
    return ResponseService(res, response, 200);
  } catch (error) {
    return ResponseService(res, error, ResponseError.INTERNAL_SERVER_ERROR);
  }
});

AppController.get('/connect', async (req: Request, res: Response) => {
  res.send('Hello Kay');
});


export default AppController;
