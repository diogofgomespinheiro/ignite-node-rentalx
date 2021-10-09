import { Specification } from '@modules/cars/domain/specification';

import { ISpecificationsRepository } from '../../specifications.repository';

class InMemorySpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  private static INSTANCE: InMemorySpecificationsRepository;

  private constructor() {
    this.specifications = [];
  }

  public static getInstance(): InMemorySpecificationsRepository {
    if (!InMemorySpecificationsRepository.INSTANCE) {
      InMemorySpecificationsRepository.INSTANCE =
        new InMemorySpecificationsRepository();
    }

    return InMemorySpecificationsRepository.INSTANCE;
  }

  async create(specification: Specification): Promise<void> {
    this.specifications.push(specification);
  }

  async findByName(name: string): Promise<Optional<Specification>> {
    const specification = this.specifications.find(
      specification => specification.name === name
    );
    return specification;
  }
}

export { InMemorySpecificationsRepository };
