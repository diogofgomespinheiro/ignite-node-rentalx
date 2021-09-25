import { Category } from '@modules/cars/domain/category';
import { ICategoriesRepository } from '@modules/cars/repositories';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const existingCategory = await this.categoriesRepository.findByName(name);

    if (existingCategory) {
      throw new Error('Category already exists!');
    }

    const category = Category.create({ name, description });
    this.categoriesRepository.create(category);
  }
}

export { CreateCategoryUseCase };
