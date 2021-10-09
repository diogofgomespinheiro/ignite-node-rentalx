export const categorySchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid'
    },
    name: {
      type: 'string',
      example: 'Category name sample'
    },
    description: {
      type: 'string',
      example: 'Category description sample'
    },
    createdAt: {
      type: 'string',
      format: 'date-time'
    }
  }
};

export const categoriesSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/category'
  }
};
