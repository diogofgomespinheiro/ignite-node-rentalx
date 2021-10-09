import { makeListCategoriesUseCase } from '@infra/http/factories/use-cases';
import { ListCategoriesController } from '@modules/cars/useCases/list-categories';

export const makeListCategoriesController = (): ListCategoriesController => {
  return new ListCategoriesController(makeListCategoriesUseCase());
};
