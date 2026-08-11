import type { Item, CreateItemDto, UpdateItemDto } from './types.js';

const items: Item[] = [
  { id: 1, studentName: 'Laura Ramírez', studentEmail: 'laura.ramirez@uni.edu.co', program: 'Ingeniería de Software', course: 'Bases de Datos I', tuitionFee: 1450000, active: true },
  { id: 2, studentName: 'Carlos Andrade', studentEmail: 'carlos.andrade@uni.edu.co', program: 'Ingeniería de Software', course: 'Algoritmos y Estructuras de Datos', tuitionFee: 1450000, active: true },
  { id: 3, studentName: 'Daniela Ospina', studentEmail: 'daniela.ospina@uni.edu.co', program: 'Ciencia de Datos', course: 'Estadística Aplicada', tuitionFee: 1550000, active: true },
];
let nextId = 4;

export function getAll(): Item[] {
  return [...items];
}

export function getById(id: number): Item | undefined {
  return items.find((item) => item.id === id);
}

export function create(data: CreateItemDto): Item {
  const newItem: Item = { id: nextId++, ...data };
  items.push(newItem);
  return { ...newItem };
}

export function update(id: number, data: UpdateItemDto): Item | undefined {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return undefined;
  items[index] = { ...items[index]!, ...data };
  return { ...items[index]! };
}

export function remove(id: number): boolean {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return false;
  items.splice(index, 1);
  return true;
}