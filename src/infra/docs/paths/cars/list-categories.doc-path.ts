export const listCategoriesPath = {
  get: {
    tags: ['Category'],
    summary: 'List categories',
    description: 'Lists all existing categories',
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/categories'
            }
          }
        }
      },
      500: {
        $ref: '#/components/fail'
      }
    }
  }
};
