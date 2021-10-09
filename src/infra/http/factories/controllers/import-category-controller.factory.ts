import { makeImportCategoryUseCase } from '@infra/http/factories/use-cases';
import { ImportCategoryController } from '@modules/cars/useCases/import-category';

export const makeImportCategoryController = (): ImportCategoryController => {
  return new ImportCategoryController(makeImportCategoryUseCase());
};
