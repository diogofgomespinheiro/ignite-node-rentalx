import { Either } from '@core/logic';

import { CategoryAlreadyExistsError } from './errors';

export type CreateCategoryResponse = Either<CategoryAlreadyExistsError, null>;
