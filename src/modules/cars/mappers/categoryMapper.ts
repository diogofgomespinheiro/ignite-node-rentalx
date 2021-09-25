import { IMapper } from '@core/infra';
import { Category } from '@modules/cars/domain';
import { ICategoryDTO } from '@modules/cars/dtos';

export class CategoryMapper implements IMapper<Category, ICategoryDTO> {
  static toDTO(category: Category): ICategoryDTO {
    return {
      id: category.id.toValue(),
      name: category.name,
      description: category.description,
      createdAt: category.createdAt
    };
  }
}
