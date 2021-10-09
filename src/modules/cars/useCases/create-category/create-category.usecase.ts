import { IUseCase } from '@core/domain';
import { left, right } from '@core/logic';
import { Category } from '@modules/cars/domain/category';
import { ICategoriesRepository } from '@modules/cars/repositories';

import { ICreateCategoryDTO } from './create-category.dto';
import { CreateCategoryResponse } from './create-category.response';
import { CategoryAlreadyExistsError } from './errors';

class CreateCategoryUseCase
  implements IUseCase<ICreateCategoryDTO, CreateCategoryResponse>
{
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({
    name,
    description
  }: ICreateCategoryDTO): Promise<CreateCategoryResponse> {
    const existingCategory = await this.categoriesRepository.findByName(name);

    if (existingCategory) {
      return left(new CategoryAlreadyExistsError(existingCategory.name));
    }

    const category = Category.create({ name, description });
    await this.categoriesRepository.create(category);
    return right(null);
  }
}

export { CreateCategoryUseCase };
