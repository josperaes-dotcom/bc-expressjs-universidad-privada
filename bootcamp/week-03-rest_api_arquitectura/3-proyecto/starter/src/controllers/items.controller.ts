import { Request, Response, NextFunction } from 'express';
import * as service from '../services/items.service';
import { CreateItemDto, UpdateItemDto } from '../types';

export async function getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const page = parseInt(req.query['page'] as string) || 1;
    const limit = parseInt(req.query['limit'] as string) || 10;
    const result = await service.findAll({ page, limit });
    res.json(result);
  } catch (error) {
    next(error);
  }
}

export async function getById(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params['id'] as string);
    const enrollment = await service.findById(id);
    if (!enrollment) {
      res.status(404).json({ error: 'Not Found', message: `Enrollment ${id} not found` });
      return;
    }
    res.json({ data: enrollment });
  } catch (error) {
    next(error);
  }
}

export async function create(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const dto = req.body as CreateItemDto;
    const enrollment = await service.create(dto);
    res.status(201).json({ data: enrollment });
  } catch (error) {
    next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params['id'] as string);
    const dto = req.body as UpdateItemDto;
    const enrollment = await service.update(id, dto);
    if (!enrollment) {
      res.status(404).json({ error: 'Not Found', message: `Enrollment ${id} not found` });
      return;
    }
    res.json({ data: enrollment });
  } catch (error) {
    next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const id = parseInt(req.params['id'] as string);
    const removed = await service.remove(id);
    if (!removed) {
      res.status(404).json({ error: 'Not Found', message: `Enrollment ${id} not found` });
      return;
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}