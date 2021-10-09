import { Category } from '@modules/cars/domain/category';

import { ICategoriesRepository } from '../../categories.repository';

class InMemoryCategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: InMemoryCategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): InMemoryCategoriesRepository {
    if (!InMemoryCategoriesRepository.INSTANCE) {
      InMemoryCategoriesRepository.INSTANCE =
        new InMemoryCategoriesRepository();
    }

    return InMemoryCategoriesRepository.INSTANCE;
  }

  async create(category: Category): Promise<void> {
    this.categories.push(category);
  }

  async list(): Promise<Category[]> {
    return this.categories;
  }

  async findByName(name: string): Promise<Optional<Category>> {
    const category = this.categories.find(category => category.name === name);
    return category;
  }
}

export { InMemoryCategoriesRepository };
