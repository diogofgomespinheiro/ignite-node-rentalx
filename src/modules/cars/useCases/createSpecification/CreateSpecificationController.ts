import { BaseController, HttpResponse } from '@core/infra';

import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';
import { SpecificationAlreadyExistsError } from './errors';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationController extends BaseController<IRequest> {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {
    super();
  }

  async executeImpl(request: IRequest): Promise<HttpResponse> {
    const { name, description } = request;

    try {
      const result = await this.createSpecificationUseCase.execute({
        name,
        description
      });

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case SpecificationAlreadyExistsError:
            return this.conflict(error);
          default:
            return this.fail(error);
        }
      } else {
        return this.created();
      }
    } catch (err) {
      return this.fail(err);
    }
  }
}

export { CreateSpecificationController };
