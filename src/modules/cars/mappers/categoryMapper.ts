import { UniqueEntityID } from '@core/domain';
import { IMapper } from '@core/infra';
import { TypeORMCategory } from '@infra/database/entities';
import { Category } from '@modules/cars/domain/category';
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

  static toPersistence(category: Category): TypeORMCategory {
    return {
      id: category.id.toValue(),
      name: category.name,
      description: category.description,
      created_at: category.createdAt
    };
  }

  static toDomain(raw: TypeORMCategory): Category {
    const id = new UniqueEntityID(raw.id);
    const category = Category.create(
      {
        name: raw.name,
        description: raw.description,
        createdAt: raw.created_at
      },
      id
    );

    return category;
  }
}
