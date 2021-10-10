import 'reflect-metadata';
import { createConnection } from '../database';

createConnection()
  .then(async () => {
    import('./app');
  })
  .catch(error => console.log(`Error connection TypeORM: ${error}`));
