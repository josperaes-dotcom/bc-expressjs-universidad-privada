// ============================================
// PROCESSOR — Filtra y calcula estadísticas
// ============================================

import type { Enrollment, EnrollmentSummary } from './types.js';

// TODO: Implementar filterByCategory
// Debe:
// 1. Si categoryFilter es null, retornar todos los items
// 2. Si categoryFilter está definido, retornar solo los items de esa categoría
//    (comparación case-insensitive con .toLowerCase())
// 3. Si no hay items en esa categoría, lanzar un Error que liste las categorías disponibles
//
// Firma esperada:
// export function filterByCategory(items: Item[], categoryFilter: string | null): Item[]

// Implementación
export function filterByCategory(
  items: Enrollment[],
  categoryFilter: string | null
): Enrollment[] {
  if (categoryFilter === null) {
    return items;
  }

  const filtered = items.filter(
    (item) => item.program.toLowerCase() === categoryFilter.toLowerCase()
  );

  if (filtered.length === 0) {
    const availableCategories = Array.from(
      new Set(items.map((item) => item.program))
    ).sort();
    throw new Error(
      `No se encontraron inscripciones para el programa "${categoryFilter}". ` +
        `Programas disponibles: ${availableCategories.join(', ')}`
    );
  }

  return filtered;
}

// TODO: Implementar calculateSummary
// Debe calcular y retornar un objeto ItemSummary con:
// - total: longitud del array
// - active: items con active === true
// - inactive: items con active === false
// - averagePrice: precio promedio redondeado a 2 decimales
// - mostExpensive: item con el mayor precio
// - cheapest: item con el menor precio
// - categories: array de categorías únicas (sin repetición)
//
// Pistas:
// - Usa .reduce() para sumar precios
// - Usa .filter() para separar activos e inactivos
// - Usa new Set() + Array.from() para categorías únicas
// - Usa Math.max/min o sort para el más caro/barato
//
// Firma esperada:
// export function calculateSummary(items: Item[]): ItemSummary

// Implementación
export function calculateSummary(items: Enrollment[]): EnrollmentSummary {
  const total = items.length;
  const active = items.filter((item) => item.active).length;
  const inactive = total - active;

  const totalPrice = items.reduce((sum, item) => sum + item.tuitionFee, 0);
  const averagePrice = total === 0 ? 0 : Number((totalPrice / total).toFixed(2));

  const sortedByPrice = [...items].sort((a, b) => a.tuitionFee - b.tuitionFee);
  const cheapest = sortedByPrice[0];
  const mostExpensive = sortedByPrice[sortedByPrice.length - 1];

  const categories = Array.from(new Set(items.map((item) => item.program))).sort();

  return {
    total,
    active,
    inactive,
    averagePrice,
    mostExpensive,
    cheapest,
    categories,
  };
}
