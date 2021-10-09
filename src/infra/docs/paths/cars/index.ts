import { createCategoryPath } from './create-category.doc-path';
import { listCategoriesPath } from './list-categories.doc-path';

export default {
  '/categories': {
    ...listCategoriesPath,
    ...createCategoryPath
  }
};
