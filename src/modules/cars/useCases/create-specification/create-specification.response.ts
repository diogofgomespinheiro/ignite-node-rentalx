import { Either } from '@core/logic';

import { SpecificationAlreadyExistsError } from './errors';

export type CreateSpecificationResponse = Either<
  SpecificationAlreadyExistsError,
  null
>;
