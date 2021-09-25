import { Request, Response } from 'express';

import { CategoryMapper } from '@modules/cars/mappers';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const categories = await this.listCategoriesUseCase.execute();
    const mappedCategories = categories.map(category =>
      CategoryMapper.toDTO(category)
    );

    return response.json(mappedCategories);
  }
}

export { ListCategoriesController };
