import { HttpResponse } from './http-response';

export abstract class BaseController<T = unknown> {
  protected abstract executeImpl(request: T): Promise<HttpResponse>;

  public async execute(request: T): Promise<HttpResponse> {
    try {
      const response = await this.executeImpl(request);
      return response;
    } catch (error) {
      console.log(`[BaseController]: Uncaught controller error`);
      console.log(error);
      return this.fail(new Error('Unexpected error'));
    }
  }

  private logErrorAndReturn(statusCode: number, message: string): HttpResponse {
    console.log(`[${statusCode}] - ${message}`);

    return {
      statusCode,
      body: {
        error: message
      }
    };
  }

  protected ok<T>(dto?: T): HttpResponse {
    return {
      statusCode: 200,
      body: dto
    };
  }

  protected created(): HttpResponse {
    return {
      statusCode: 201,
      body: undefined
    };
  }

  protected badRequest(error: Error): HttpResponse {
    return this.logErrorAndReturn(400, error.message);
  }

  protected unauthorized(error: Error): HttpResponse {
    return this.logErrorAndReturn(401, error.message);
  }

  protected forbidden(error: Error): HttpResponse {
    return this.logErrorAndReturn(403, error.message);
  }

  protected notFound(error: Error): HttpResponse {
    return this.logErrorAndReturn(404, error.message);
  }

  protected conflict(error: Error): HttpResponse {
    return this.logErrorAndReturn(409, error.message);
  }

  protected fail(error: Error): HttpResponse {
    return this.logErrorAndReturn(500, error.message);
  }
}
