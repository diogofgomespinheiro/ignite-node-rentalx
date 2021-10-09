import { BaseController, HttpResponse } from '@core/infra';
import { CategoryMapper } from '@modules/cars/mappers';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController extends BaseController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {
    super();
  }

  async executeImpl(): Promise<HttpResponse> {
    try {
      const result = await this.listCategoriesUseCase.execute();

      const mappedCategories = result.value.map(category =>
        CategoryMapper.toDTO(category)
      );

      return this.ok(mappedCategories);
    } catch (err) {
      return this.fail(err);
    }
  }
}

export { ListCategoriesController };
