import { UseCaseError } from '@core/domain/errors';

export class SpecificationAlreadyExistsError extends UseCaseError {
  constructor(specification: string) {
    super(`The specification "${specification}" already exists!`);
    this.name = 'SpecificationAlreadyExistsError';
  }
}
