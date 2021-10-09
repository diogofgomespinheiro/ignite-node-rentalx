import { makeCreateSpecificationUseCase } from '@infra/http/factories/use-cases';
import { CreateSpecificationController } from '@modules/cars/useCases/create-specification';

export const makeCreateSpecificationController =
  (): CreateSpecificationController => {
    return new CreateSpecificationController(makeCreateSpecificationUseCase());
  };
