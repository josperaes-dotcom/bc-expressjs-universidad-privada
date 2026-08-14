import { Router } from 'express';

interface Item {
  id: number;
  name: string;
}

const items: Item[] = [];

export const itemsRouter = Router();

// GET /items — listar todos
itemsRouter.get('/', (_req, res) => {
  res.json(items);
});

// POST /items — crear nuevo item
itemsRouter.post('/', (req, res) => {
  const newItem: Item = {
    id: items.length + 1,
    name: req.body.name as string,
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// GET /items/:id — obtener por ID
itemsRouter.get('/:id', (req, res) => {
  const item = items.find((i) => i.id === Number(req.params.id));
  if (!item) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }
  res.json(item);
});

// PUT /items/:id — actualizar item
itemsRouter.put('/:id', (req, res) => {
  const index = items.findIndex((i) => i.id === Number(req.params.id));
  if (index === -1) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }
  items[index] = { ...items[index], name: req.body.name as string };
  res.json(items[index]);
});

// DELETE /items/:id — eliminar item
itemsRouter.delete('/:id', (req, res) => {
  const index = items.findIndex((i) => i.id === Number(req.params.id));
  if (index === -1) {
    res.status(404).json({ error: 'Item not found' });
    return;
  }
  items.splice(index, 1);
  res.status(204).send();
});