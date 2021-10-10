import {
  categoriesSchema,
  categorySchema,
  createCategoryRequestSchema,
  createSpecificationRequestSchema,
  importCategoryRequestSchema
} from './cars';
import { errorSchema } from './error.doc-schema';

export default {
  category: categorySchema,
  categories: categoriesSchema,
  createCategoryRequest: createCategoryRequestSchema,
  createSpecificationRequest: createSpecificationRequestSchema,
  importCategoryRequest: importCategoryRequestSchema,
  error: errorSchema
};
