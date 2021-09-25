import { Specification } from '@modules/cars/domain/specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Optional<Specification>>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
