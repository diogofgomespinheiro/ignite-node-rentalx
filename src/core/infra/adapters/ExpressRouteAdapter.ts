import { Request, Response } from 'express';

import { BaseController } from '../Controller';

export const adaptRoute = (controller: BaseController) => {
  return async (request: Request, response: Response) => {
    const data = {
      ...request.body,
      ...request.params,
      ...request.query
    };

    const httpResponse = await controller.execute(data);
    return response.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
