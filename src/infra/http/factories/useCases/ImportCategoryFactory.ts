import { TypeORMCategoriesRepository } from '@modules/cars/repositories';
import { ImportCategoryUseCase } from '@modules/cars/useCases/importCategory';

export const makeImportCategoryUseCase = (): ImportCategoryUseCase => {
  const categoriesRepository = TypeORMCategoriesRepository.getInstance();
  return new ImportCategoryUseCase(categoriesRepository);
};
