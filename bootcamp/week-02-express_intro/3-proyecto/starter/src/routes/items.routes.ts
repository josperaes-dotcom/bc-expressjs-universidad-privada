import { Router } from 'express';
import * as store from '../store.js';
import type { CreateItemDto, UpdateItemDto } from '../types.js';

export const itemsRouter = Router();

itemsRouter.get('/', (_req, res) => {
  res.json(store.getAll());
});

itemsRouter.get('/:id', (req, res) => {
  const id = Number(req.params['id']);
  const item = store.getById(id);
  if (!item) {
    res.status(404).json({ error: 'Enrollment not found' });
    return;
  }
  res.json(item);
});

itemsRouter.post('/', (req, res) => {
  const dto = req.body as CreateItemDto;
  if (!dto.studentName || !dto.program || !dto.course || dto.tuitionFee == null) {
    res.status(400).json({ error: 'studentName, program, course and tuitionFee are required' });
    return;
  }
  const created = store.create(dto);
  res.status(201).json(created);
});

itemsRouter.put('/:id', (req, res) => {
  const id = Number(req.params['id']);
  const dto = req.body as UpdateItemDto;
  const updated = store.update(id, dto);
  if (!updated) {
    res.status(404).json({ error: 'Enrollment not found' });
    return;
  }
  res.json(updated);
});

itemsRouter.delete('/:id', (req, res) => {
  const id = Number(req.params['id']);
  const deleted = store.remove(id);
  if (!deleted) {
    res.status(404).json({ error: 'Enrollment not found' });
    return;
  }
  res.status(204).send();
});