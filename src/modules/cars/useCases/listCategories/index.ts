import { InMemoryCategoriesRepository } from '@modules/cars/repositories';

import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const categoriesRepository = InMemoryCategoriesRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoryController = new ListCategoriesController(
  listCategoriesUseCase
);

export { listCategoryController };
