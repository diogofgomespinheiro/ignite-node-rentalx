import { IUseCase } from '@core/domain';
import { left, right } from '@core/logic';
import { Specification } from '@modules/cars/domain/specification';
import { ISpecificationsRepository } from '@modules/cars/repositories';

import { ICreateSpecificationDTO } from './CreateSpecificationDTO';
import { CreateSpecificationResponse } from './CreateSpecificationResponse';
import { SpecificationAlreadyExistsError } from './errors';

class CreateSpecificationUseCase
  implements IUseCase<ICreateSpecificationDTO, CreateSpecificationResponse>
{
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  async execute({
    name,
    description
  }: ICreateSpecificationDTO): Promise<CreateSpecificationResponse> {
    const existingSpecification =
      await this.specificationsRepository.findByName(name);

    if (existingSpecification) {
      return left(
        new SpecificationAlreadyExistsError(existingSpecification.name)
      );
    }

    const specification = Specification.create({ name, description });
    await this.specificationsRepository.create(specification);
    return right(null);
  }
}

export { CreateSpecificationUseCase };
