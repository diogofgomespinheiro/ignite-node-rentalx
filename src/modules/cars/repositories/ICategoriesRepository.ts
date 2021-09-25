import { Category } from '@modules/cars/domain/category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoriesRepository {
  findByName(name: string): Optional<Category>;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICreateCategoryDTO, ICategoriesRepository };
