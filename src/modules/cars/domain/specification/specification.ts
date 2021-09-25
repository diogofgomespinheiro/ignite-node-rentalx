import { Entity, UniqueEntityID } from '@core/domain';

interface ISpecificationProps {
  name: string;
  description: string;
  createdAt?: Date;
}

export class Specification extends Entity<Required<ISpecificationProps>> {
  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  private constructor(
    props: Required<ISpecificationProps>,
    id?: UniqueEntityID
  ) {
    super(props, id);
  }

  static create(
    props: ISpecificationProps,
    id?: UniqueEntityID
  ): Specification {
    const specification = new Specification(
      {
        ...props,
        createdAt: props.createdAt || new Date()
      },
      id
    );

    return specification;
  }
}
