import components from './components';
import paths from './paths';
import schemas from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'RentalX Documentation',
    description: 'This a Rent API',
    version: '1.0.0',
    contact: {
      email: 'diogo.fgomes.pinheiro@gmail.com'
    }
  },
  license: {
    name: 'MIT',
    url: 'https://opensource.org/licenses/MIT'
  },
  tags: [
    {
      name: 'Category',
      description: 'Categories Management'
    }
  ],
  paths,
  schemas,
  components
};
