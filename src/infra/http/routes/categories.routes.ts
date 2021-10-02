import { Router } from 'express';
import multer from 'multer';

import {
  makeCreateCategoryController,
  makeImportCategoryController,
  makeListCategoriesController
} from '@infra/http/factories/controllers';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp'
});

categoriesRoutes.get('/', (request, response) =>
  makeListCategoriesController().handle(request, response)
);

categoriesRoutes.post('/', (request, response) =>
  makeCreateCategoryController().handle(request, response)
);

categoriesRoutes.post('/import', upload.single('file'), (request, response) =>
  makeImportCategoryController().handle(request, response)
);

export { categoriesRoutes };
