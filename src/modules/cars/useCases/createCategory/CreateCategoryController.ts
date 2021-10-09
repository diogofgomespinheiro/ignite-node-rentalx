import { BaseController } from '@core/infra/Controller';
import { HttpResponse } from '@core/infra/HttpResponse';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CategoryAlreadyExistsError } from './errors';

type IRequest = {
  name: string;
  description: string;
};

class CreateCategoryController extends BaseController<IRequest> {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {
    super();
  }

  async executeImpl(request: IRequest): Promise<HttpResponse> {
    const { name, description } = request;

    try {
      const result = await this.createCategoryUseCase.execute({
        name,
        description
      });

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case CategoryAlreadyExistsError:
            return this.conflict(error);
          default:
            return this.fail(error);
        }
      } else {
        return this.created();
      }
    } catch (err) {
      console.log(err);
      return this.fail(err);
    }
  }
}

export { CreateCategoryController };
