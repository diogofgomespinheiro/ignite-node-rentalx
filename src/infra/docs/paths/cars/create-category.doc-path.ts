export const createCategoryPath = {
  post: {
    tags: ['Category'],
    summary: 'Create category',
    description: 'Create a new category',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createCategoryRequest'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Created'
      },
      409: {
        $ref: '#/components/conflict'
      },
      500: {
        $ref: '#/components/fail'
      }
    }
  }
};
