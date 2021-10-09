import {
  createCategoryRequestSchema,
  categoriesSchema,
  categorySchema
} from './cars';
import { errorSchema } from './error.doc-schema';

export default {
  category: categorySchema,
  categories: categoriesSchema,
  createCategoryRequest: createCategoryRequestSchema,
  error: errorSchema
};
