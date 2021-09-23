import { nanoid } from 'nanoid';

interface ISpecificationProps {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;
}

class Specification {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor(props: Required<ISpecificationProps>) {
    this.id = props.id;
    this.name = props.name;
    this.description = props.description;
    this.created_at = props.created_at;
  }

  public static create({
    id = nanoid(),
    name,
    description,
    created_at = new Date()
  }: ISpecificationProps): Specification {
    return new Specification({ id, name, description, created_at });
  }
}

export { Specification };
