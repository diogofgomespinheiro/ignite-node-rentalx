import { makeCreateCategoryUseCase } from '@infra/http/factories/useCases';
import { CreateCategoryController } from '@modules/cars/useCases/createCategory/CreateCategoryController';

export const makeCreateCategoryController = (): CreateCategoryController => {
  return new CreateCategoryController(makeCreateCategoryUseCase());
};
