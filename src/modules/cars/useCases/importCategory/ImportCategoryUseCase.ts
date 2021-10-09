import csvParse from 'csv-parse';
import fs from 'fs';

import { left, right } from '@core/logic';
import { Category } from '@modules/cars/domain/category';
import { ICategoriesRepository } from '@modules/cars/repositories';

import { FileNotFoundError } from './errors';
import { IImportCategoryDTO } from './ImportCategoryDTO';
import { ImportCategoryResponse } from './ImportCategoryResponse';

type ImportCategory = {
  name: string;
  description: string;
};

class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  private loadCategories(file: Express.Multer.File): Promise<ImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: ImportCategory[] = [];

      const parseFile = csvParse();
      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', error => reject(error));
    });
  }

  async execute({ file }: IImportCategoryDTO): Promise<ImportCategoryResponse> {
    if (!file) {
      return left(new FileNotFoundError());
    }

    const categories = await this.loadCategories(file);

    categories.forEach(async category => {
      const { name, description } = category;

      const existingCategory = await this.categoriesRepository.findByName(name);

      if (!existingCategory) {
        const category = Category.create({ name, description });
        this.categoriesRepository.create(category);
      }
    });

    return right(null);
  }
}

export { ImportCategoryUseCase };
