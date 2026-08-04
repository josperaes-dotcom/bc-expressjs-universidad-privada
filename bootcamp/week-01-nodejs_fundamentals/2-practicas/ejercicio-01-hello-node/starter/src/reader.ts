// ============================================
// READER — Lee el archivo de datos JSON
// ============================================

import { readFile } from 'fs/promises';
import { join } from 'path';
import type { Product } from './types.js';

export async function readProducts(): Promise<Product[]> {
  const filePath = join(import.meta.dirname, '..', 'data', 'products.json');

  try {
    const raw = await readFile(filePath, 'utf-8');
    return JSON.parse(raw) as Product[];
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);

    throw new Error(
      `No se pudo leer el archivo de productos. Detalle: ${reason}`
    );
  }
}