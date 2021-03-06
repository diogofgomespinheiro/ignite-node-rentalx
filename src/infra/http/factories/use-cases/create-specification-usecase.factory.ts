import { TypeORMSpecificationsRepository } from '@modules/cars/repositories';
import { CreateSpecificationUseCase } from '@modules/cars/useCases/create-specification';

export const makeCreateSpecificationUseCase =
  (): CreateSpecificationUseCase => {
    const specificationsRepository =
      TypeORMSpecificationsRepository.getInstance();
    return new CreateSpecificationUseCase(specificationsRepository);
  };
