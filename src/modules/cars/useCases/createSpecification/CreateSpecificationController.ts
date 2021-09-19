import { Request, Response } from 'express';

import { CrateSpecificationUseCase } from './CreateSpecificationUseCase';

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CrateSpecificationUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    this.createSpecificationUseCase.execute({ name, description });

    return response.status(201).send();
  }
}

export { CreateSpecificationController };
