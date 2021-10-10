export const createSpecificationRequestSchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      example: 'Specification name sample'
    },
    description: {
      type: 'string',
      example: 'Specification description sample'
    }
  },
  required: ['name', 'description']
};
