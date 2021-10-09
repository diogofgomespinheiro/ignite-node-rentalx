import 'reflect-metadata';
import { createConnection } from '../database';

createConnection()
  .then(async () => {
    import('./server');
  })
  .catch(error => console.log(`Error connection TypeORM: ${error}`));
