import { InMemorySpecificationsRepository } from '@modules/cars/repositories';

import { CreateSpecificationController } from './CreateSpecificationController';
import { CrateSpecificationUseCase } from './CreateSpecificationUseCase';

const specificationsRepository = InMemorySpecificationsRepository.getInstance();
const createSpecificationUseCase = new CrateSpecificationUseCase(
  specificationsRepository
);
const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase
);

export { createSpecificationController };
