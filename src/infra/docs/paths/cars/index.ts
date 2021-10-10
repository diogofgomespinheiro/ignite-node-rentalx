import { createCategoryPath } from './create-category.doc-path';
import { createSpecificationPath } from './create-specification.doc-path';
import { importCategoryPath } from './import-category.doc-path';
import { listCategoriesPath } from './list-categories.doc-path';

export default {
  '/categories': {
    ...listCategoriesPath,
    ...createCategoryPath
  },
  '/categories/import': {
    ...importCategoryPath
  },
  '/specifications': {
    ...createSpecificationPath
  }
};
