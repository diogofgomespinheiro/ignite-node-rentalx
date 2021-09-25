import { Category } from '@modules/cars/domain/category';

interface ICategoriesRepository {
  findByName(name: string): Promise<Optional<Category>>;
  list(): Promise<Category[]>;
  create(category: Category): Promise<void>;
}

export { ICategoriesRepository };
