import { getRepository, Repository } from 'typeorm';

import { TypeORMCategory } from '@infra/database/entities';
import { Category } from '@modules/cars/domain/category';
import { CategoryMapper } from '@modules/cars/mappers';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';

class TypeORMCategoriesRepository implements ICategoriesRepository {
  private repository: Repository<TypeORMCategory>;

  private static INSTANCE: TypeORMCategoriesRepository;

  private constructor() {
    this.repository = getRepository(TypeORMCategory);
  }

  public static getInstance(): TypeORMCategoriesRepository {
    if (!TypeORMCategoriesRepository.INSTANCE) {
      TypeORMCategoriesRepository.INSTANCE = new TypeORMCategoriesRepository();
    }

    return TypeORMCategoriesRepository.INSTANCE;
  }

  async create(category: Category): Promise<void> {
    const createdCategory = this.repository.create(
      CategoryMapper.toPersistence(category)
    );

    await this.repository.save(createdCategory);
  }

  async list(): Promise<Category[]> {
    const categories = await this.repository.find();
    return categories.map(category => CategoryMapper.toDomain(category));
  }

  async findByName(name: string): Promise<Optional<Category>> {
    const category = await this.repository.findOne({ name });
    if (!category) return null;
    return CategoryMapper.toDomain(category);
  }
}

export { TypeORMCategoriesRepository };
