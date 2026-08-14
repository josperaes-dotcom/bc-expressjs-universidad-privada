import { Router } from 'express';
import * as controller from '../controllers/items.controller';

export const itemsRouter = Router();

itemsRouter.get('/', controller.getAll);
itemsRouter.get('/:id', controller.getById);
itemsRouter.post('/', controller.create);
itemsRouter.put('/:id', controller.update);
itemsRouter.delete('/:id', controller.remove);