import { TypeORMCategoriesRepository } from '@modules/cars/repositories';
import { ListCategoriesUseCase } from '@modules/cars/useCases/list-categories';

export const makeListCategoriesUseCase = (): ListCategoriesUseCase => {
  const categoriesRepository = TypeORMCategoriesRepository.getInstance();
  return new ListCategoriesUseCase(categoriesRepository);
};
