export default class ResponseError extends Error {
  message: string;
  status: number;
  static responseError: ResponseError;
  static NOT_FOUND = 404;
  static BAD_REQUEST = 400;
  static INTERNAL_SERVER_ERROR = 500;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
  }

  static get(error: any | Error, status?: number) {
    if (ResponseError.responseError) {
      ResponseError.responseError.message = error.message;
      ResponseError.responseError.status = (status ?? error.status);
      return ResponseError.responseError;
    }
    return ResponseError.responseError =
        new ResponseError(error.message, (status ?? error.status));
  }
}
