export const importCategoryPath = {
  post: {
    tags: ['Category'],
    summary: 'Upload a new category',
    description: 'Upload new categories through csv files',
    requestBody: {
      required: true,
      content: {
        'multipart/form-data': {
          schema: {
            $ref: '#/schemas/importCategoryRequest'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'Created'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/fail'
      }
    }
  }
};
