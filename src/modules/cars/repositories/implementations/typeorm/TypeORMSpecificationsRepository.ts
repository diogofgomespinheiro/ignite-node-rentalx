import { getRepository, Repository } from 'typeorm';

import { TypeORMSpecification } from '@infra/database/entities';
import { Specification } from '@modules/cars/domain/specification';
import { SpecificationMapper } from '@modules/cars/mappers';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';

class TypeORMSpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<TypeORMSpecification>;

  private static INSTANCE: TypeORMSpecificationsRepository;

  private constructor() {
    this.repository = getRepository(TypeORMSpecification);
  }

  public static getInstance(): TypeORMSpecificationsRepository {
    if (!TypeORMSpecificationsRepository.INSTANCE) {
      TypeORMSpecificationsRepository.INSTANCE =
        new TypeORMSpecificationsRepository();
    }

    return TypeORMSpecificationsRepository.INSTANCE;
  }

  async create(specification: Specification): Promise<void> {
    const createdSpecification = this.repository.create(
      SpecificationMapper.toPersistence(specification)
    );

    await this.repository.save(createdSpecification);
  }

  async findByName(name: string): Promise<Optional<Specification>> {
    const specification = await this.repository.findOne({ name });
    if (!specification) return null;
    return SpecificationMapper.toDomain(specification);
  }
}

export { TypeORMSpecificationsRepository };
