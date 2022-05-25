import {Response} from 'express';

export const ResponseService = (response: Response, data: any, status: number) => {
  response.status(status).json(responseFormat(false, data, '', status));
};

const responseFormat = (error: boolean,
    data: any, message: string, status: number) => ({
  error, data, message, status, statusText: error ? 'failed' : 'success',
});

export interface IResponseFormat<T = any> {
  error?: boolean;
  status?: string;
  data?: T;
  message: string;
  statusCode?: number;
}
