import { makeListCategoriesUseCase } from '@infra/http/factories/useCases';
import { ListCategoriesController } from '@modules/cars/useCases/listCategories';

export const makeListCategoriesController = (): ListCategoriesController => {
  return new ListCategoriesController(makeListCategoriesUseCase());
};
