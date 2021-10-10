export const createSpecificationPath = {
  post: {
    tags: ['Specification'],
    summary: 'Create specification',
    description: 'Create a new specification',
    requestBody: {
      required: true,
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/createSpecificationRequest'
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
