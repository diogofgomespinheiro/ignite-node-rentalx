import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import swaggerConfig from '../docs';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(router);

app.listen(3333, () => console.log('Server is running!'));
