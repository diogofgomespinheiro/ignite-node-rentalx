export const importCategoryRequestSchema = {
  type: 'object',
  properties: {
    file: {
      type: 'string',
      format: 'binary'
    }
  },
  required: ['file']
};
