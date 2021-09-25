import { Request, Response } from 'express';

import { CategoryMapper } from '@modules/cars/mappers';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.listCategoriesUseCase.execute();
    const mappedCategories = categories.map(category =>
      CategoryMapper.toDTO(category)
    );

    return response.json(mappedCategories);
  }
}

export { ListCategoriesController };
