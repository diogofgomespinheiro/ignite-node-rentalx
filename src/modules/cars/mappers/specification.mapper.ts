import { UniqueEntityID } from '@core/domain';
import { IMapper } from '@core/infra';
import { TypeORMSpecification } from '@infra/database/entities';
import { Specification } from '@modules/cars/domain/specification';
import { ISpecificationDTO } from '@modules/cars/dtos';

export class SpecificationMapper
  implements IMapper<Specification, ISpecificationDTO>
{
  static toDTO(specification: Specification): ISpecificationDTO {
    return {
      id: specification.id.toValue(),
      name: specification.name,
      description: specification.description,
      createdAt: specification.createdAt
    };
  }

  static toPersistence(specification: Specification): TypeORMSpecification {
    return {
      id: specification.id.toValue(),
      name: specification.name,
      description: specification.description,
      created_at: specification.createdAt
    };
  }

  static toDomain(raw: TypeORMSpecification): Specification {
    const id = new UniqueEntityID(raw.id);
    const specification = Specification.create(
      {
        name: raw.name,
        description: raw.description,
        createdAt: raw.created_at
      },
      id
    );

    return specification;
  }
}
