export const createCategoryRequestSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Category name sample'
    },
    description: {
      type: 'string',
      example: 'Category description sample'
    }
  },
  required: ['name', 'description']
};
