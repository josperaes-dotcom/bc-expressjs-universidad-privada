// ============================================
// READER — Lee el archivo de datos JSON
// ============================================

import { readFile } from 'fs/promises';
import { join } from 'path';
import type { Enrollment } from './types.js';

// TODO: Implementar la función readItems
// Debe:
// 1. Construir la ruta al archivo data/items.json usando join() e import.meta.dirname
// 2. Leer el archivo con readFile (de 'fs/promises') usando 'utf-8'
// 3. Parsear el JSON y retornar el array de Item[]
// 4. Si ocurre un error, lanzar un Error descriptivo con el mensaje original
//
// Firma esperada:
// export async function readItems(): Promise<Item[]>
//
// Ejemplo de estructura:
// export async function readItems(): Promise<Item[]> {
//   const filePath = join(import.meta.dirname, '..', 'data', 'items.json');
//   try {
//     const raw = await readFile(filePath, 'utf-8');
//     return JSON.parse(raw) as Item[];
//   } catch (err) {
//     // Lanza un error descriptivo — el main() lo atrapará con try/catch
//     throw new Error(`...`);
//   }
// }

// Implementación (dominio: Enrollment, archivo: data/enrollments.json)
export async function readEnrollments(): Promise<Enrollment[]> {
  const filePath = join(import.meta.dirname, '..', 'data', 'enrollments.json');

  try {
    const raw = await readFile(filePath, 'utf-8');
    return JSON.parse(raw) as Enrollment[];
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    throw new Error(
      `No se pudo leer el archivo de datos en "${filePath}". Detalle: ${reason}`
    );
  }
}
