import { Entity, UniqueEntityID } from '@core/domain';

interface ICategoryProps {
  name: string;
  description: string;
  createdAt?: Date;
}

export class Category extends Entity<Required<ICategoryProps>> {
  get name(): string {
    return this.props.name;
  }

  get description(): string {
    return this.props.description;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  private constructor(props: Required<ICategoryProps>, id?: UniqueEntityID) {
    super(props, id);
  }

  static create(props: ICategoryProps, id?: UniqueEntityID): Category {
    const category = new Category(
      {
        ...props,
        createdAt: props.createdAt || new Date()
      },
      id
    );

    return category;
  }
}
