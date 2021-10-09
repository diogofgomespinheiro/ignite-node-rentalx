import { Either } from '@core/logic';

import { FileNotFoundError } from './errors';

export type ImportCategoryResponse = Either<FileNotFoundError, null>;
