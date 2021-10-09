import { Either } from '@core/logic';
import { Category } from '@modules/cars/domain/category';

export type ListCategoriesResponse = Either<null, Category[]>;
