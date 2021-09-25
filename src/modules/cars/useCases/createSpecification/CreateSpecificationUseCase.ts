import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CrateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const existingSpecification =
      await this.specificationsRepository.findByName(name);

    if (existingSpecification) {
      throw new Error('Specification already exists!');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CrateSpecificationUseCase };
