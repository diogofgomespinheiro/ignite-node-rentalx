import { makeCreateSpecificationUseCase } from '@infra/http/factories/useCases';
import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification';

export const makeCreateSpecificationController =
  (): CreateSpecificationController => {
    return new CreateSpecificationController(makeCreateSpecificationUseCase());
  };
