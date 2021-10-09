import { Router } from 'express';
import multer from 'multer';

import { adaptRoute } from '@core/infra/adapters/ExpressRouteAdapter';
import {
  makeCreateCategoryController,
  makeImportCategoryController,
  makeListCategoriesController
} from '@infra/http/factories/controllers';

const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp'
});

categoriesRoutes.get('/', adaptRoute(makeListCategoriesController()));

categoriesRoutes.post('/', adaptRoute(makeCreateCategoryController()));

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  adaptRoute(makeImportCategoryController())
);

export { categoriesRoutes };
