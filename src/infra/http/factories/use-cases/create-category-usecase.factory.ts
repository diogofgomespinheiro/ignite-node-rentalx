import { TypeORMCategoriesRepository } from '@modules/cars/repositories';
import { CreateCategoryUseCase } from '@modules/cars/useCases/create-category';

export const makeCreateCategoryUseCase = (): CreateCategoryUseCase => {
  const categoriesRepository = TypeORMCategoriesRepository.getInstance();
  return new CreateCategoryUseCase(categoriesRepository);
};
