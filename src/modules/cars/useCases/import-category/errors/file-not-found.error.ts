import { UseCaseError } from '@core/domain/errors';

export class FileNotFoundError extends UseCaseError {
  constructor() {
    super('There was no file sent on the request.');
    this.name = 'FileNotFoundError';
  }
}
