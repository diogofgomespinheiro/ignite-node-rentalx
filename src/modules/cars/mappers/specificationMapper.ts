import { IMapper } from '@core/infra';
import { Specification } from '@modules/cars/domain/specification';
import { ISpecificationDTO } from '@modules/cars/dtos';

export class SpecificationMapper
  implements IMapper<Specification, ISpecificationDTO>
{
  static toDTO(category: Specification): ISpecificationDTO {
    return {
      id: category.id.toValue(),
      name: category.name,
      description: category.description,
      createdAt: category.createdAt
    };
  }
}
