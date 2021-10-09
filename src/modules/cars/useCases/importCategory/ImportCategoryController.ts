import { BaseController, HttpResponse } from '@core/infra';

import { FileNotFoundError } from './errors';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

interface IRequest {
  file: Express.Multer.File;
}

class ImportCategoryController extends BaseController<IRequest> {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {
    super();
  }

  async executeImpl(request: IRequest): Promise<HttpResponse> {
    const { file } = request;

    try {
      const result = await this.importCategoryUseCase.execute({ file });

      if (result.isLeft()) {
        const error = result.value;

        switch (error.constructor) {
          case FileNotFoundError:
            return this.notFound(error);
          default:
            return this.fail(error);
        }
      } else {
        return this.ok();
      }
    } catch (err) {
      return this.fail(err);
    }
  }
}

export { ImportCategoryController };
