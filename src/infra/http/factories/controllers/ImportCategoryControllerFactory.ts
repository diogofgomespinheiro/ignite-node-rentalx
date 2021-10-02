import { makeImportCategoryUseCase } from '@infra/http/factories/useCases';
import { ImportCategoryController } from '@modules/cars/useCases/importCategory';

export const makeImportCategoryController = (): ImportCategoryController => {
  return new ImportCategoryController(makeImportCategoryUseCase());
};
