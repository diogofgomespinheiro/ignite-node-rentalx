import { nanoid } from 'nanoid';

interface ICategoryProps {
  id?: string;
  name: string;
  description: string;
  created_at?: Date;
}

class Category {
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  constructor(props: Required<ICategoryProps>) {
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
  }: ICategoryProps): Category {
    return new Category({ id, name, description, created_at });
  }
}

export { Category };
