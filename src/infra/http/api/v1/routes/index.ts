import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationsRoutes } from './specifications.routes';

const v1Router = Router();

v1Router.use('/categories', categoriesRoutes);
v1Router.use('/specifications', specificationsRoutes);

export { v1Router };
