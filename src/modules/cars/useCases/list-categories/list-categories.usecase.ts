import { right } from '@core/logic';
import { ICategoriesRepository } from '@modules/cars/repositories';

import { ListCategoriesResponse } from './list-categories.response';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute(): Promise<ListCategoriesResponse> {
    const categories = await this.categoriesRepository.list();
    return right(categories);
  }
}

export { ListCategoriesUseCase };
