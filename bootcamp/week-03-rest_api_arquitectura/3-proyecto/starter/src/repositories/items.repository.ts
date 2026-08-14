import { Enrollment, CreateItemDto, UpdateItemDto } from '../types';

const store: Enrollment[] = [
  { id: 1, studentName: 'Laura Ramírez', program: 'Ingeniería de Software', active: true, createdAt: new Date().toISOString() },
  { id: 2, studentName: 'Carlos Andrade', program: 'Ciencia de Datos', active: true, createdAt: new Date().toISOString() },
  { id: 3, studentName: 'Daniela Ospina', program: 'Diseño Gráfico', active: false, createdAt: new Date().toISOString() },
];
let nextId = 4;

export async function findAll(): Promise<Enrollment[]> {
  return [...store];
}

export async function findById(id: number): Promise<Enrollment | undefined> {
  return store.find((item) => item.id === id);
}

export async function create(dto: CreateItemDto): Promise<Enrollment> {
  const item: Enrollment = { id: nextId++, ...dto, createdAt: new Date().toISOString() };
  store.push(item);
  return { ...item };
}

export async function update(id: number, dto: UpdateItemDto): Promise<Enrollment | undefined> {
  const index = store.findIndex((item) => item.id === id);
  if (index === -1) return undefined;
  store[index] = { ...store[index]!, ...dto };
  return { ...store[index]! };
}

export async function remove(id: number): Promise<boolean> {
  const index = store.findIndex((item) => item.id === id);
  if (index === -1) return false;
  store.splice(index, 1);
  return true;
}