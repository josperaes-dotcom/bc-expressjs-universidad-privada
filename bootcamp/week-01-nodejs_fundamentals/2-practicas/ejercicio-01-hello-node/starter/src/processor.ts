// ============================================
// PROCESSOR — Procesa los productos
// ============================================

import type { Product, ProductReport } from './types.js';

export function generateReport(products: Product[]): ProductReport {
  const totalProducts = products.length;

  const totalValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0
  );

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const lowStockItems = products.filter((product) => product.stock < 5);

  return {
    totalProducts,
    totalValue,
    categories,
    lowStockItems,
  };
}