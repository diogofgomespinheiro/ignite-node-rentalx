import { makeCreateCategoryUseCase } from '@infra/http/factories/use-cases';
import { CreateCategoryController } from '@modules/cars/useCases/create-category';

export const makeCreateCategoryController = (): CreateCategoryController => {
  return new CreateCategoryController(makeCreateCategoryUseCase());
};
