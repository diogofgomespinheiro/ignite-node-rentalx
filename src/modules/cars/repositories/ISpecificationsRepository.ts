import { Specification } from '@modules/cars/domain/specification';

interface ISpecificationsRepository {
  create(specification: Specification): Promise<void>;
  findByName(name: string): Promise<Optional<Specification>>;
}

export { ISpecificationsRepository };
