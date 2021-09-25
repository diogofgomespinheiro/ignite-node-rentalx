import { Specification } from '@modules/cars/domain/specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ description, name }: ICreateSpecificationDTO): void;
  findByName(name: string): Optional<Specification>;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
