import { UseCaseError } from '@core/domain/errors';

export class CategoryAlreadyExistsError extends UseCaseError {
  constructor(category: string) {
    super(`The category ${category} already exists!`);
    this.name = 'CategoryAlreadyExistsError';
  }
}
