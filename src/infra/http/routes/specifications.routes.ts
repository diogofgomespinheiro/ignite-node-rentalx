import { Router } from 'express';

import { adaptRoute } from '@core/infra/adapters';
import { makeCreateSpecificationController } from '@infra/http/factories/controllers';

const specificationsRoutes = Router();

specificationsRoutes.post('/', adaptRoute(makeCreateSpecificationController()));

export { specificationsRoutes };
